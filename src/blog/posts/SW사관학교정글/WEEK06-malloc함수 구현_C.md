---
title: "WEEK06-malloc함수 구현_C"
icon: pen-to-square
date: 2022-11-12
category:
  - Develop
tags:
  - SW사관학교정글
  - Develop
---

- SW사관학교 정글 5기 6주차 회고
<!-- more -->

해당 내용은 정확하지 않을 수 있습니다.

귀한 시간 내주시어 지적해 주시면 감사드리겠습니다.

---

## **Malloc 함수란?**

C에서 메모리를 동적으로 할당 하기위한 함수이다.

사용을 위해선 stdlib.h 헤더를 include 해야 사용할 수 있다.

## **왜 메모리를 동적으로 할당할 일이 생길까?**

기존에 Python만을 사용하던 나에겐 이해가 되지 않는 부분중 하나였다.

C에서는 컴파일과정이 필요하고 이로 인해 컴파일 후 runtime이라는 부분이 생긴다.

이렇게 되면 문제가 몇가지 생긴다.

- 컴파일을 하면서 '난 변수에서 이 정도 메모리를 쓸 거고, 리스트로 이 정도 메모리 쓸 거야' 하는 정보가 실행파일 정보에 담긴다.
- 하지만 프로그램이라는게, 유동적인 구조들이 필요할 경우가 당연히 생긴다.
- 예를들어 리스트에 담아야 하는 데이터가 실행 때마다 달라진다던지 하는 문제이다. (C는 리스트도 메모리를 미리 할당함)
- 파일 실행중에 코드를 고쳐 다시 컴파일하는 것은 말도 안 되는 일이다.

위와 같은 상황 때문에 Runtime 단계에서 동적으로 메모리를 할당할 필요가 생긴다.

## **구현 코드(C)**

**1. 묵시적(implicit)할당기**

```c
/*
Implicit list
Results for mm malloc:
trace  valid  util     ops      secs  Kops
 0       yes   99%    5694  0.008998   633
 1       yes   99%    5848  0.008603   680
 2       yes   99%    6648  0.013874   479
 3       yes  100%    5380  0.010741   501
 4       yes   66%   14400  0.000140102857
 5       yes   92%    4800  0.009917   484
 6       yes   92%    4800  0.008639   556
 7       yes   55%   12000  0.237579    51
 8       yes   51%   24000  0.389892    62
 9       yes   27%   14401  0.123478   117
10       yes   34%   14401  0.003544  4064
Total          74%  112372  0.815405   138

Perf index = 44 (util) + 9 (thru) = 54/100
 */
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <unistd.h>
#include <string.h>

#include "mm.h"
#include "memlib.h"

/*내가 쓴거*/
#define WSIZE 4                 // 한개의 워드 사이즈
#define DSIZE 8                 // 2배의 워드 사이즈
#define CHUNKSIZE (1<<12)       // 힙을 한번 늘릴 때 필요한 사이즈 4KiB (관습)

#define MAX(x, y) ((x) > (y) ? (x) : (y))            // 어느것이 더 큰지 비교해주는 함수

#define PACK(size, alloc) ((size) | (alloc))        // 블록 헤더에 사이즈와 할당여부 넣을 함수

#define GET(p) (*(unsigned int *)(p))               // 블록의 값을 읽어 올 함수
#define PUT(p, val) (*(unsigned int *)(p) = (val))  // 특정 위치에 값을 넣을 함수

#define GET_SIZE(p) (GET(p) & ~0x7)                 // 사이즈 읽는 함수
#define GET_ALLOC(p) (GET(p) & 0x1)                 // 할당 여부를 읽어올 함수

#define HDRP(bp) ((char *)(bp) - WSIZE)                         // 헤더위치 읽는 함수
#define FTRP(bp) ((char *)(bp) + GET_SIZE(HDRP(bp)) - DSIZE)    // 푸터위치 읽는 함수

#define NEXT_BLKP(bp) ((char *)(bp) + GET_SIZE(((char *)(bp) - WSIZE)))     // 현재 블록의 다음 위치로 이동하는 함수
#define PREV_BLKP(bp) ((char *)(bp) - GET_SIZE(((char *)(bp) - DSIZE)))     // 현재 블록의 이전 위치로 이동하는 함수

static char *heap_listp;                            // 초기 세팅 할 힙

static void *coalesce(void *bp);
static void *extend_heap(size_t words);
static void *find_fit(size_t asize);
static void place(void *bp, size_t asize);
/*내가 쓴거*/

/*********************************************************
 * NOTE TO STUDENTS: Before you do anything else, please
 * provide your team information in the following struct.
 ********************************************************/
team_t team = {
    /* Team name */
    "SW_Jungle",
    /* First member's full name */
    "Hong Kyu",
    /* Second member's full name (leave blank if none) */
    "",
    /* Second member's email address (leave blank if none) */
    ""
};

/* single word (4) or double word (8) alignment */
#define ALIGNMENT 8

/* rounds up to the nearest multiple of ALIGNMENT */
#define ALIGN(size) (((size) + (ALIGNMENT-1)) & ~0x7)

#define SIZE_T_SIZE (ALIGN(sizeof(size_t)))

/*
 * mm_init - initialize the malloc package.
 */
int mm_init(void)
{
    /* Crate the initial empty heap*/
    if ((heap_listp = mem_sbrk(4*WSIZE)) == (void *)-1) //mem_sbrk 함수를 통해 필요한 메모리 양이 있는지 확인 및 할당
        return -1;
    PUT(heap_listp, 0);                                 //블록의 첫 padding
    PUT(heap_listp + (1*WSIZE), PACK(DSIZE, 1));        //
    PUT(heap_listp + (2*WSIZE), PACK(DSIZE, 1));
    PUT(heap_listp + (3*WSIZE), PACK(0, 1));

    heap_listp += (2 * WSIZE);

    if (extend_heap(CHUNKSIZE / WSIZE) == NULL)
        return -1;
    return 0;
}

/*
1. 힙이 초기화 될 때(init)앞으로 블록을 넣기 위해 사이즈를 한번 늘리는 것
2. malloc을 통해 블록을 넣을 영역을 알아봤지만 적당한 맞춤 영역을 찾기 못했을 때 늘리는 것
*/
static void *extend_heap(size_t words)
{
    char *bp;                           // Block points
    size_t size;

    size = (words % 2) ? (words + 1) * WSIZE : words * WSIZE; // 홀수일때 하나추가해서 패딩으로 넣는다.
    if ((long)(bp = mem_sbrk(size)) == -1)          //들어갔다 나오면 bp(블록포인터)는 epilogue header의 뒤로 옮겨진다.
        return NULL;

    PUT(HDRP(bp), PACK(size, 0));                           //
    PUT(FTRP(bp), PACK(size, 0));
    PUT(HDRP(NEXT_BLKP(bp)), PACK(0, 1));

    return coalesce(bp);
}

/*
 * mm_malloc - Allocate a block by incrementing the brk pointer.
 *     Always allocate a block whose size is a multiple of the alignment.
 */
void *mm_malloc(size_t size)
{
    /*책 추가한거*/
    size_t asize;
    size_t extendsize;
    char *bp;

    if (size == 0) return NULL;

    if (size <= DSIZE) asize = 2 * DSIZE;        // 사용하려는 size가 더블워드보다 작거나 같다면, 더블워드 두배를 객체로 할당
    else asize = DSIZE * ((size + (DSIZE) + (DSIZE-1)) / DSIZE); //그 이상이면 size 값에서 가장 인접한 8의 배수로 할당

    if ((bp = find_fit(asize)) != NULL){        //가용가능한 블록이 있으면
        place(bp, asize);
        return bp;                              //블록 포인터 리턴
    }

    extendsize = MAX(asize, CHUNKSIZE);         //가용 가능한 블록이 없으면 사용하려는 사이즈와 4KiB 중 큰 사이즈로 추가 할당
    if ((bp = extend_heap(extendsize / WSIZE)) == NULL) //
        return NULL;
    place(bp, asize);                           //새로 할당한 메모리에 할당
    return bp;

    /*원래 있던거*/
    // int newsize = ALIGN(size + SIZE_T_SIZE);
    // void *p = mem_sbrk(newsize);
    // if (p == (void *)-1)
	// return NULL;
    // else {
    //     *(size_t *)p = size;
    //     return (void *)((char *)p + SIZE_T_SIZE);
    // }
}

/*
 * mm_free - Freeing a block does nothing.
 */
void mm_free(void *bp)
{
    size_t size = GET_SIZE(HDRP(bp));

    PUT(HDRP(bp), PACK(size, 0)); // 가용으로 만들고 주변 블록과 합침
    PUT(FTRP(bp), PACK(size, 0));
    coalesce(bp);
}

/*
힙을 확장 후 주변에 가용블록이 있는지 체크해서 합쳐주어야 한다. 우왕 어떻게 하지
*/
static void *coalesce(void *bp)
{
    size_t prev_alloc = GET_ALLOC(FTRP(PREV_BLKP(bp)));         //현재 블록 이전 위치 푸터에서 가용 여부를 변수에 할당
    size_t next_alloc = GET_ALLOC(HDRP(NEXT_BLKP(bp)));         //현재 블록 다음 위치 헤더에서 가용 여부를 변수에 할당
    size_t size = GET_SIZE(HDRP(bp));                           //지금 헤더의 사이즈를 변수에 할당

    if (prev_alloc && next_alloc) {                             //case1. 둘다 이미 할당이 되어 있어 그냥 지금 블록만
        return bp;
    }
    else if (prev_alloc && !next_alloc){                        //case2. 다음 블록만 할당이 안되어 있는 경우
        size += GET_SIZE(HDRP(NEXT_BLKP(bp)));                  //다음 블록의 사이즈를 지금 사이즈에 더함
        PUT(HDRP(bp), PACK(size,0));                            //헤더와 푸터를 지금 사이즈로 갱신!
        PUT(FTRP(bp), PACK(size,0));
    }
    else if (!prev_alloc && next_alloc){                        //case3. 이전 블록만 할당이 안되어 있는 경우
        size += GET_SIZE(HDRP(PREV_BLKP(bp)));                  //이전 블록의 사이즈를 현블록 사이즈에 더함
        PUT(FTRP(bp), PACK(size, 0));                           //푸터위치 먼저 현재 사이즈크기로 조정
        PUT(HDRP(PREV_BLKP(bp)), PACK(size, 0));                //헤더를 이전 헤더 위치로 수정
        bp = PREV_BLKP(bp);                                     //이전 블록 포인터를 블록 포인터로!
    }
    else {                                                      //case4. 둘다 사용 가능할때
        size += GET_SIZE(HDRP(PREV_BLKP(bp))) + GET_SIZE(FTRP(NEXT_BLKP(bp)));
        PUT(HDRP(PREV_BLKP(bp)), PACK(size, 0));                //양 블록 사이즈를 모두 합치고
        PUT(FTRP(NEXT_BLKP(bp)), PACK(size, 0));                //뒤 헤더를 헤더로 앞 푸터를 푸터로, bp는 헤더로
        bp = PREV_BLKP(bp);
    }
    return bp;
}

static void *find_fit(size_t asize)
{
    void *bp;

    for (bp = heap_listp; GET_SIZE(HDRP(bp)) > 0; bp = NEXT_BLKP(bp)){ //초기 할당한 블록 포인터부터 헤더를 모두 돌아
        if (!GET_ALLOC(HDRP(bp)) && (asize <= GET_SIZE(HDRP(bp)))){    //가용되지 않았으면서 사이즈가 같거나 작으면
            return bp;                              //블록 포인터 반환
        }
    }
    return NULL;

}

static void place(void *bp, size_t asize)       //찾은 블록 포인터, 할당할 크기
{
    size_t csize = GET_SIZE(HDRP(bp));          //찾은 블록의 사이즈를 객체로 할당

    if ((csize - asize) >= (2 * DSIZE)){        //찾은 블록사이즈에서 할당할 크기를 뺀 값 >= 더블워드*2 이면
        PUT(HDRP(bp), PACK(asize, 1));          //찾은 블록 포인터에 헤더, 푸터 할당
        PUT(FTRP(bp), PACK(asize, 1));
        bp = NEXT_BLKP(bp);                     //남은 블록으로 포인터 옮김
        PUT(HDRP(bp), PACK(csize-asize, 0));    //남은 블록에 헤더 푸터 할당
        PUT(FTRP(bp), PACK(csize-asize, 0));
    }
    else{                                       //남은 블록이 더블워드*2 보다 작으면
        PUT(HDRP(bp), PACK(csize, 1));          //바로 헤더 푸터 할당
        PUT(FTRP(bp), PACK(csize, 1));
    }
}

/*
 * mm_realloc - Implemented simply in terms of mm_malloc and mm_free
 */
void *mm_realloc(void *ptr, size_t size)        //크기를 조정할 블록의 포인터, 요청 사이즈
{
    void *oldptr = ptr;
    void *newptr;
    size_t copySize;

    newptr = mm_malloc(size);                   //요청 사이즈를 할당
    if (newptr == NULL)
      return NULL;
    // copySize = *(size_t *)((char *)oldptr - SIZE_T_SIZE);
    copySize = GET_SIZE(HDRP(oldptr));          //크기를 조정할 블록의 사이즈를 할당
    if (size < copySize)                        //요청 사이즈가 조정할 블록 사이즈보다 작으면
      copySize = size;                          //요청 사이즈를 조정할 블록 사이즈에 할당
    memcpy(newptr, oldptr, copySize);
    mm_free(oldptr);                            //크기 조정하기전 블록 프리
    return newptr;
}

```

**2. 명시적(explicit)할당기**

```c
/*
Explicit 방식
free된 블록의 Payload 부분에 pred(predecessor)와 succ(successor)을 추가로 할당한다.
pred에는 이전 Free 블록의 succ을 가르키는 포인터,
succ에는 다음 free 블록의 pred를 가르키는 포인터를 할당한다.
가장 최신의 free블록은 Root Free블록과 연결 하여 관리하게 된다.
이후 find 과정에서 선형탐색으로 블록을 찾아 메모리 할당을 한다.
Results for mm malloc:
trace  valid  util     ops      secs  Kops
 0       yes   89%    5694  0.000267 21334
 1       yes   92%    5848  0.000183 31887
 2       yes   94%    6648  0.000361 18421
 3       yes   96%    5380  0.000296 18188
 4       yes   66%   14400  0.000172 83721
 5       yes   88%    4800  0.000547  8783
 6       yes   85%    4800  0.000605  7930
 7       yes   55%   12000  0.003699  3244
 8       yes   51%   24000  0.003887  6174
 9       yes   26%   14401  0.122771   117
10       yes   34%   14401  0.003567  4037
Total          71%  112372  0.136354   824

Perf index = 42 (util) + 40 (thru) = 82/100
*/
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <unistd.h>
#include <string.h>

#include "mm.h"
#include "memlib.h"

/*********************************************************
 * NOTE TO STUDENTS: Before you do anything else, please
 * provide your team information in the following struct.
 ********************************************************/
team_t team = {
    /* Team name */
    "SW_Jungle",
    /* First member's full name */
    "Hong Kyu",
    /* Second member's full name (leave blank if none) */
    "",
    /* Second member's email address (leave blank if none) */
    ""
};

/*
예를 들어 size에 9가 들어가면 9+7=16 에 ~0x7 을 &연산 하게 된다.
이진수로 16 = 0001 0000
0x7 = 0000 0111이고 ~은 not이니 1111 1000으로 된다.
따라서 size = 9일때 0001 0000 & 1111 1000 을 연산 하면 0001 0000 = 16이 된다.

그런데 만일 7이 들어왔다고 가정해보자 그럼 7+7 = 14
그러면 0000 1110 & 1111 1000 이 되고 이는 0000 1000 = 15이 된다.
따라서 malloc함수에서 7이하의 size가 들어오면 안되기에 SIZE_T_SIZE를 더해주게 된다.
*/
#define ALIGNMENT 8
#define ALIGN(size) (((size) + (ALIGNMENT-1)) & ~0x7) // 2번
#define SIZE_T_SIZE (ALIGN(sizeof(size_t))) // 1번

/*내가 쓴거*/
#define WSIZE 4                 // 워드 (bytes)
#define DSIZE 8                 // 더블워드 (bytes)
#define CHUNKSIZE (1<<12)       // 2^12 = 4096bytes -> 4kib */
#define MINIMUM 16              // pheader, pFooter, PREC, SUCC 해서 4*4=16kib

#define MAX(x, y) ((x) > (y) ? (x) : (y))            // 어느것이 더 큰지 비교해주는 함수

#define PACK(size, alloc) ((size) | (alloc))        // 블록 헤더에 사이즈와 할당여부 넣을 함수

#define GET(p) (*(unsigned int *)(p))               // 블록의 값을 읽어 올 함수
#define PUT(p, val) (*(unsigned int *)(p) = (val))  // 특정 위치에 값을 넣을 함수

#define GET_SIZE(p) (GET(p) & ~0x7)                 // 사이즈 읽는 함수
#define GET_ALLOC(p) (GET(p) & 0x1)                 // 할당 여부를 읽어올 함수

#define HDRP(bp) ((char *)(bp) - WSIZE)                         // 헤더위치 읽는 함수
#define FTRP(bp) ((char *)(bp) + GET_SIZE(HDRP(bp)) - DSIZE)    // 푸터위치 읽는 함수

#define NEXT_BLKP(bp) ((char *)(bp) + GET_SIZE(((char *)(bp) - WSIZE)))     // 현재 블록의 다음 위치로 이동하는 함수
#define PREV_BLKP(bp) ((char *)(bp) - GET_SIZE(((char *)(bp) - DSIZE)))     // 현재 블록의 이전 위치로 이동하는 함수

/* Free List 상에서의 이전, 이후 블록의 포인터를 리턴한다. */
#define PREC_FREEP(bp)  (*(void**)(bp))             // 이전 블록의 bp// 이중포인터로 형변환
#define SUCC_FREEP(bp)  (*(void**)(bp + WSIZE))     // 이후 블록의 bp

static char *heap_listp = NULL;                        //초기 블록 전역변수
static char *free_listp = NULL;                        //초기 Free 블록 전역 변수

static void* extend_heap(size_t words);
static void* coalesce(void* bp);
static void* find_fit(size_t asize);
static void place(void* bp, size_t newsize);

int mm_init(void);
void *mm_malloc(size_t size);
void mm_free(void *bp);
void *mm_realloc(void *ptr, size_t size);

/*
 * mm_init - initialize the malloc package.
 */
int mm_init(void)
{
    /*mem_sbrk 함수를 통해 필요한 메모리 양이 있는지 확인 및 6words짜리 메모리 주소를 가져온다. */
    if ((heap_listp = mem_sbrk(6*WSIZE)) == (void *)-1)
        return -1;
    PUT(heap_listp, 0);                              //블록의 첫 padding
    PUT(heap_listp + (1*WSIZE), PACK(MINIMUM, 1));   //prologue header
    PUT(heap_listp + (2*WSIZE), NULL);               //PREC 포인터
    PUT(heap_listp + (3*WSIZE), NULL);               //SUCC 포인터
    PUT(heap_listp + (4*WSIZE), PACK(MINIMUM, 1));   //prologue footer
    PUT(heap_listp + (5*WSIZE), PACK(0, 1));         //epilogue header

    free_listp = heap_listp + 2 * WSIZE;         //헤더 다음 위치에 탐색시점을 일치 시킴

    if (extend_heap(CHUNKSIZE / WSIZE) == NULL)      //한덩어리(Chunksize) 떼어 와서 초기 가용 블록을 생성
        return -1;                                   //wordsize로 나누는 이유는 word단위로 받기 위해!
    return 0;
}

/*
1. 힙이 초기화 될 때(init)앞으로 블록을 넣기 위해 사이즈를 한번 늘리는 것
2. malloc을 통해 블록을 넣을 영역을 알아봤지만 적당한 맞춤 영역을 찾기 못했을 때 늘리는 것
*/
static void *extend_heap(size_t words)              //워드단위로 받은 한덩어리
{
    char *bp;
    size_t size;

    size = (words % 2) ? (words + 1) * WSIZE : (words) * WSIZE; //size를 짝수 word로 만든 후 byte 형태(* WSIZE)로 만든다.
    if ((long)(bp = mem_sbrk(size)) == -1)   //새 메모리의 주소를 bp로 둔다. 주소는 int로는 못 받아서 long으로 casting
        return NULL;                         //이때 주소는 init에서 만든 epilogue header뒤 주소(init제일 끝 주소)를 갖고있다.

    PUT(HDRP(bp), PACK(size, 0));            //새 메모리의 헤더 만들기(기존엔 epilogue header 자리)
    PUT(FTRP(bp), PACK(size, 0));            //새 메모리의 푸터 만들기
    PUT(HDRP(NEXT_BLKP(bp)), PACK(0, 1));    //epilogue header 만들기

    return coalesce(bp);                     // 새로 할당한 free블록과 기존 free블록을 합치러 go(bp(주소)가 넘어가는 것을 주목)
}

/*
 * mm_malloc - Allocate a block by incrementing the brk pointer.
 *     Always allocate a block whose size is a multiple of the alignment.
 */
void *mm_malloc(size_t size)
{
    /*책 추가한거*/
    size_t asize;
    size_t extendsize;
    char *bp;

    if (size == 0) return NULL;

    asize = ALIGN(size + SIZE_T_SIZE);          //인접 8의 배수로 만들어준다.(위에 설명함)

    if ((bp = find_fit(asize)) != NULL){        //가용가능한 블록이 있으면
        place(bp, asize);
        return bp;                              //블록 포인터 리턴
    }

    extendsize = MAX(asize, CHUNKSIZE);         //가용 가능한 블록이 없으면 사용하려는 사이즈와 4KiB 중 큰 사이즈로 추가 할당
    if ((bp = extend_heap(extendsize / WSIZE)) == NULL) //
        return NULL;
    place(bp, asize);                           //새로 할당한 메모리에 할당
    return bp;

}

/*
힙을 확장 후 주변에 가용블록이 있는지 체크해서 합쳐주어야 한다. 우왕 어떻게 하지
*/
static void* coalesce(void* bp)                             //bp가 주소여서 void* bp
{
    size_t prev_alloc = GET_ALLOC(FTRP(PREV_BLKP(bp)));     //현재 블록 이전 위치 푸터에서 가용 여부를 변수에 할당(1/0)
    size_t next_alloc = GET_ALLOC(HDRP(NEXT_BLKP(bp)));     //현재 블록 다음 위치 헤더에서 가용 여부를 변수에 할당(1/0)
    size_t size = GET_SIZE(HDRP(bp));                       //지금 헤더의 사이즈를 변수에 할당

    if (prev_alloc && !next_alloc){                         //case1. 다음 블록만 가용블록인(0일때 = free블록 리스트에 있을때) 경우
        removeBlock(NEXT_BLKP(bp));                         //다음블록(가용블록)을 지금 블록(사용블록)과 합치치기때문에 free리스트에서 빼줘야함
        size += GET_SIZE(HDRP(NEXT_BLKP(bp)));              //다음 블록의 사이즈를 지금 사이즈에 더함
        PUT(HDRP(bp), PACK(size,0));                        //헤더와 푸터를 지금 사이즈로 갱신!
        PUT(FTRP(bp), PACK(size,0));
    }
    else if (!prev_alloc && next_alloc){                    //case3. 이전 블록만 할당이 안되어 있는 경우
        removeBlock(PREV_BLKP(bp));                         // 직전 블록을 free list에서 제거한다.
        size += GET_SIZE(HDRP(PREV_BLKP(bp)));              //이전 블록의 사이즈를 현블록 사이즈에 더함
        bp = PREV_BLKP(bp);                                 //이전 블록 포인터를 블록 포인터로!
        PUT(HDRP(bp), PACK(size, 0));                       //푸터위치 먼저 현재 사이즈크기로 조정
        PUT(FTRP(bp), PACK(size, 0));                       //헤더를 이전 헤더 위치로 수정
    }
    else if (!prev_alloc && !next_alloc){                   //case4. 둘다 사용 가능할때
        removeBlock(PREV_BLKP(bp));                         //앞/뒤 둘다 제거
        removeBlock(NEXT_BLKP(bp));
        size += GET_SIZE(HDRP(PREV_BLKP(bp))) + GET_SIZE(FTRP(NEXT_BLKP(bp)));
        bp = PREV_BLKP(bp);
        PUT(HDRP(bp), PACK(size, 0));                       //푸터위치 먼저 현재 사이즈크기로 조정
        PUT(FTRP(bp), PACK(size, 0));                       //뒤 헤더를 헤더로 앞 푸터를 푸터로, bp는 헤더로
    }
    putFreeBlock(bp);                                       //가용블록이 없다면 그냥 새로 할당된 애만 freeblock 에 넣어주면 됨
    return bp;
}

static void* find_fit(size_t asize)  //할당 받고 싶은 크기의 인접한 8의 배수 값을 받는다.
{
    void *bp;

    /*
    <중요> implicit과 다르게 프리된 블록에서만 찾으면 된다.
    우린 free블록 처음 포인터를 알고 있으며 거기부터 끝까지 돌며 맞는 사이즈를 갖고 온다.
    */
    for (bp = free_listp; GET_ALLOC(HDRP(bp)) == NULL; bp = SUCC_FREEP(bp)){
        if(asize <= GET_SIZE(HDRP(bp))){
            return bp;
        }
    }

    return NULL;

}

static void place(void* bp, size_t asize)       //찾은 블록 포인터, 할당할 크기
{
    size_t csize = GET_SIZE(HDRP(bp));          //찾은 블록의 사이즈를 객체로 할당

    // 할당될 블록이므로 free list에서 없애준다.
    removeBlock(bp);

    if ((csize - asize) >= (2 * DSIZE)){        //찾은 블록사이즈에서 할당할 크기를 뺀 값 >= 더블워드*2 이면
        PUT(HDRP(bp), PACK(asize, 1));          //찾은 블록 포인터에 헤더, 푸터 할당
        PUT(FTRP(bp), PACK(asize, 1));
        /*뒤에 남은 블록*/
        bp = NEXT_BLKP(bp);                     //남은 블록으로 포인터 옮김
        PUT(HDRP(bp), PACK(csize-asize, 0));    //남은 블록에 헤더 푸터 할당
        PUT(FTRP(bp), PACK(csize-asize, 0));
        putFreeBlock(bp);                       //짜투리 블록은 free블록으로 삽입
    }
    else{                                       //남은 블록이 더블워드*2 보다 작으면
        PUT(HDRP(bp), PACK(csize, 1));          //바로 헤더 푸터 할당
        PUT(FTRP(bp), PACK(csize, 1));
    }
}

/*
    putFreeBlock(bp) : 새로 반환되거나 생성된 가용 블록을 free list의 첫 부분에 넣는다.
    핵심1. 처음에 넣을꺼임
    핵심2. 새로 넣은걸로 포인터(free_listp) 바뀔꺼임
*/
void putFreeBlock(void* bp){
    SUCC_FREEP(bp) = free_listp;  // 새 블록의 succ포인터는 기준 포인터(이전에 처음있던 놈)를 봐야 하고
    PREC_FREEP(bp) = NULL;        // 새 블록의 뒤는 없으므로 null
    PREC_FREEP(free_listp) = bp;  // 이전 첫블록의 뒤포인터는 bp를 보고
    free_listp = bp;              // 마지막으로 기준 포인터를 바꿈
}

/*
    removeBlock(bp) : 할당되거나 연결되는 가용 블록을 free list에서 없앤다.
*/
void removeBlock(void *bp){
    // 블록이 첫번째일때
    if (bp == free_listp){
        PREC_FREEP(SUCC_FREEP(bp)) = NULL;  //지금 블록이 갖고있는 다음블록이 갖고있는 이전 포인터를 NULL로...즉, 내 다음블록이 나(이전블록 포인터)를 가르키는 포인터를 NULL로
        free_listp = SUCC_FREEP(bp);        //블록 포인터를 옮김(삭제되는 다음 블록)
    }
    // free list 안에서 없앨 때
    else{
        SUCC_FREEP(PREC_FREEP(bp)) = SUCC_FREEP(bp); // 지금 블록의 다음 블록 포인터를 bp 다음 블록의 이전포인터로 변경
        PREC_FREEP(SUCC_FREEP(bp)) = PREC_FREEP(bp);
    }
}

/*
 * mm_free - Freeing a block does nothing.
 */
void mm_free(void *bp)
{
    size_t size = GET_SIZE(HDRP(bp)); //삭제하려는 블록의 사이즈를 가져오고

    PUT(HDRP(bp), PACK(size, 0)); // 가용으로 만들고 주변 가용블록과 합침
    PUT(FTRP(bp), PACK(size, 0));
    coalesce(bp);
}

/*
 * mm_realloc - Implemented simply in terms of mm_malloc and mm_free
 */
void *mm_realloc(void *ptr, size_t size)        //크기를 조정할 블록의 포인터, 요청 사이즈
{
    void *oldptr = ptr;
    void *newptr;
    size_t copySize;

    newptr = mm_malloc(size);                   //요청 사이즈를 할당
    if (newptr == NULL)
      return NULL;

    copySize = GET_SIZE(HDRP(oldptr));          //크기를 조정할 블록의 사이즈를 할당

    if (size < copySize)                        //요청 사이즈가 조정할 블록 사이즈보다 작으면
      copySize = size;                          //요청 사이즈를 조정할 블록 사이즈에 할당

    memcpy(newptr, oldptr, copySize);           //newptr에 oldptr를 시작으로 copySize만큼 메모리 값을 복사한다.
    mm_free(oldptr);                            //크기 조정하기 전 블록은 프리
    return newptr;
}

```

3. 명시적 할당기(Bast Fit)

- find\_fit 함수만 별도로 구현하여 수정
- 점수는 더 낮게 나온다...

```c
static void* find_fit(size_t asize)  //할당 받고 싶은 크기의 인접한 8의 배수 값을 받는다.
{
    void *bp;
    void *cur;
    size_t temp_size = 0;
    size_t old_temp_size = 0;
    /*
    끝까지 돌리고
        만약 asize보다 크거나 같으면 임의 사이즈에 저장하고 임의 포인터에도 저장
            만약 임의의 사이즈보다 작은애를 만나면 갱신
    */
    for (bp = free_listp; GET_ALLOC(HDRP(bp)) != 1; bp = SUCC_FREEP(bp)){
        if(asize <= GET_SIZE(HDRP(bp))){        //받은 사이즈보다 크거나 같은 사이즈를 만나면
            temp_size = GET_SIZE(HDRP(bp));     //해당 사이즈를 임시 저장
            if (temp_size > old_temp_size){     //임시 저장한 사이즈가 이전에 저장했던 블록사이즈 보다 작으면
                old_temp_size = temp_size;      //새 사이즈를 올드사이즈로 저장하고
                cur = bp;                       //새 블록의 포인터를 저장
            }
        }
    }
    if (old_temp_size != 0){
        return cur;
    }
    return NULL;

}

```

## **배운 점**

지나고 드는 생각은 가상 메모리라는 개념을 정확히 잡지 못하고 구현을 하여 많이 어려웠던 주였다.

그래도 그 덕분인지 지금은 가상 메모리와 페이징, 세그먼트 같은 메모리 이용 기법들에 대해 많이 이해하였다.
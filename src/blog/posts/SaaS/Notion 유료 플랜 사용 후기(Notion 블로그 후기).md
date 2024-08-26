---
title: Notion 유료 플랜 사용 후기(Notion 블로그 후기)
icon: pen-to-square
date: 2024-07-22
category:
  - SaaS
tags:
  - Notion
---
- Notion 유로 플랜 사용해보기
<!-- more -->

## 개요

Notion에서 최근 “사이트” 프로덕트를 업데이트 하였으며, 이를 사용하여 Notion으로 직접 블로그를 운영해 볼까 하여 유료플랜을 결제!

해당 내용에 대한 사용 후기를 정리 하려고 한다.

![](./image/Pasted%20image%2020240819135337.png)


## Notion Sites 업데이트!

[Notion – Publish anything, fast](https://www.notion.so/ko-kr/product/sites)

사실 보면 알겠지만, 일전에 있는 기능들에서 Favicon(파비콘), 검색 인덱싱(SEO) 추가 밖에 없는 것 같지만 별도의 프로덕트로 구분하여 추가 한 것을 보니,

앞으로 노션에서 노션을 윕사이트로 사용 할 수 있도록 업데이트를 할 것을 기대한다.

유로 플랜을 결제 하고 사용해 보자.(개비쌈)

![](./image/Pasted%20image%2020240819135511.png)
## Site 공유 상세 설정 기능 정리

1. “공유” 클릭시 메인 구성
    
    자동으로 생성되는 URL과 사이트 사용자 지정, 검색엔진 인덱싱, 링크 만료 기간 설정이 있다.
    

![](./image/Pasted%20image%2020240819135542.png)

2. 사이트 사용자 지정 설정(New)
    
    Open Graph와 파비콘, GA를 설정 할 수 있다.
    
    그리고 ‘제목’이라고 변역이 되어 있는데, 상단 Nav를 수정 할 수 있는 기능이다.
    
    OG와 Thema, 파비콘은 특별한게 없고, 제목(Nav)을 상세히 살펴 보겠다.
    
    ![](./image/Pasted%20image%2020240819135640.png)


- 이동 경로 : 브레드 스럼 노출 여부
- 메인 검색 노출 여부
- 템플릿으로 복제 버튼 노출 여부
- Notion 워터마크 노출 여부(플러스 계정 전용)
- GA 코드 설정

⭐️ 페이지 단축키(플러스 계정 전용) : 공유된 페이지의 하위 페이지들을 상단의 메뉴로 등록 할 수 있다. (GNB로 생각하면 쉽다)

>[!info]
>보이는 문제로는 모바일에서 해당 메뉴들이 보이지 않고 햄버거 처리도 되지 않는다.


![](./image/Pasted%20image%2020240819135822.png)

3. 검색엔진 인덱싱
    
    거창하게 “검색엔진 인덱싱”이라고 써놓았지만, OG 이미지, Title, Description을 설정 하는 공간이다.
    
    ![](./image/Pasted%20image%2020240819135900.png)

## 도메인 설정

사실 이것 때문에 해당 포스트를 쓰게 되었다.

유료 플랜은 Notion.site의 서브도메인을 5개까지 생성 할 수 있다.

하지만, 사용자 지정 도메인. 즉, **개인 도메인은 추가로 월 14,000원**을 내야한다. 도둑놈들 아닌가…

![](./image/Pasted%20image%2020240819135942.png)
![](./image/Pasted%20image%2020240819140005.png)

## 사이트 빌드 후 SEO 체크 및 후기
체크 사이트는 [https://novela-soft.com/](https://novela-soft.com/) , [https://pagespeed.web.dev/](https://pagespeed.web.dev/) 두곳에서 체크해봤다.

내 개인 블로그는 Vercel의 무료플랜으로 빌드하고 있다. 성능면에서는 당연히 Notion 사이트 보다 낮은 것이 맞다고 생각 하지만 SEO 면에서 보면, 여러 문제 들이 있었다.

1. 구글써치콘솔 등록 불가
    
    여러번 시도를 했고 다음날에도 시도를 해보았으나, 불가능 했다.
    ![](./image/Pasted%20image%2020240819140237.png)

2. 네이버 써치 어드바이져 등록 불가
    
    네이버 웹마스터 도구에 등록 하기 위해선 하기 이미지처럼 2가지 방법밖에 없는데, 이부분은 notion에서 불가능한 방법이다.
    ![](./image/Pasted%20image%2020240819140333.png)

3. Sitemap.xml 문제
    
    Sitemap을 들어가보면 알겠지만, [notion.so](http://notion.so) 사이트의 사이트맵을 보여주고있다… 이게 무슨…
    
    ![](./image/Pasted%20image%2020240819140410.png)

## 결론
notion 유로 플랜에서 제공하는 Sites는 아직 미완성인 것 같다. 특히 커스텀 도메인을 추가 비용을 지불해야 하는 점음 조금 실망 스러웠다. 

robots.txt나 sitemap.xml 도 조금 찾아 보니 서브도메인인 경우 각가의 폴더마다 다시 세팅 해주어야 한다고 한다. 이와 같은 점으로 커스텀 도메인을 사용하지 않는다면, robots.txt나 sitemap.xml 설정이 많이 힘들어 보인다. 

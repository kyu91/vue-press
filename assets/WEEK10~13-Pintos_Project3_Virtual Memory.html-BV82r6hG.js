import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as e,e as i,b as a,o as n}from"./app-DizRhznI.js";const t="/assets/Untitled11-ZSJR_hNl.png",r={},p=i("ul",null,[i("li",null,"SW사관학교 정글 5기 10~13주차 정리")],-1),h=a('<h2 id="_1-virtual-memory-관련-모르는-용어-정리" tabindex="-1"><a class="header-anchor" href="#_1-virtual-memory-관련-모르는-용어-정리"><span>1. Virtual Memory 관련 모르는 용어 정리</span></a></h2><ul><li>용어 정리 <ul><li><p>블록디바이스 (Block Device)</p><ul><li>하드디스크나 CD/DVD 등의 장치</li><li>블록이나 섹터 등의 정해진 단위로 반환</li><li>I / O 속도가 빠름</li><li>다른 종류로 캐릭터 디바이스가 있다.</li></ul><figure><img src="'+t+`" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>섹터 (sector)</p><ul><li>디스크에서 데이터 한 조각의 단위를 말한다.</li></ul></li><li><p>스왑 파티션 (SWAP)</p><ul><li>메모리(RAM)가 초과하였을때 필요</li></ul></li></ul></li></ul><h2 id="_2-과제-설명서-요약" tabindex="-1"><a class="header-anchor" href="#_2-과제-설명서-요약"><span>2. 과제 설명서 요약</span></a></h2><ul><li><p>Introduction</p><ul><li>무한한 메모리를 빌드하여 제한을 풀기</li><li>프로젝트 2를 이어서 시작</li></ul></li><li><p>Background</p><ul><li>Source Files <ul><li><code>vm</code> 디렉토리에서 작업</li><li><code>Makefile</code>은 건들지 말고 바꾸지 말라는 코드는 바꾸지 말것</li></ul></li><li><code>include/vm/vm.h</code>, <code>vm/vm.c</code><ul><li>가상메모리의 기본적인 인터페이스 제공</li><li>헤더파일에서는 가상 메모리 시스템이 지원해야 하는 <code>vm_type</code> 정의 <ul><li>VM_UNINIT</li><li>VM_ANON</li><li>VM_FILE</li></ul></li><li>보조 페이지 테이블 구현</li></ul></li><li><code>include/vm/uninit.h</code>, <code>vm/uninit.c</code><ul><li>vm_type = <code>VM_UNINIT</code> : 초기화되지 않는 페이지들을 위한 기능 제공</li><li>현재 모든 페이지가 초기화 되지 않은 페이지로 설정</li><li>이후 <code>anonymous page</code>, <code>file-backed page</code>로 변환</li></ul></li><li><code>include/vm/anon.h</code>, <code>vm/anon.c</code><ul><li>vm_type = VM_ANON : anonymous page 기능 제공</li></ul></li><li><code>include/vm/inspect.h</code>, <code>vm/inspect.c</code><ul><li>채점을 위한 메모리 검사기능</li><li>수정 XXXXXX</li></ul></li><li>작업할 파일은 대부분 vm 경로와 이전 프로젝트에 소개된 파일들</li><li><code>include/devices/block.h</code>, <code>devices/block.c</code><ul><li>블록 디바이스로의 섹터기반 읽기/쓰기를 제공</li><li>이 인터페이스는 블록 디바이스가 스왑 파티션에서 접근 할 때 사용</li></ul></li></ul></li><li><p>Memory Terminology (메모리 용어)</p><ul><li><p>Pages</p><ul><li>4,096바이트(byte) = 4키비바이트(KiB)</li><li>이 길이를 가지는 가상 메모리의 연속된 영역</li><li>페이지에 정렬(page-aligned) = <strong>가상주소의 시작부분이 페이지 크기로 나누어 떨어진다.</strong><ul><li>64bit 가상주소의 마지막 12bit는 페이지 오프셋</li></ul></li><li>상위 bit는 페이지테이블의 인덱스를 표시하기 위해 사용</li><li>64bit시스템은 4가지 페이지 테이블 사용</li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">63          48 47            39 38            30 29            21 20         12 11         0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">+-------------+----------------+----------------+----------------+-------------+------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| Sign Extend |    Page-Map    | Page-Directory | Page-directory |  Page-Table |    Page    |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|             | Level-4 Offset |    Pointer     |     Offset     |   Offset    |   Offset   |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">+-------------+----------------+----------------+----------------+-------------+------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">              |                |                |                |             |            |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">              +------- 9 ------+------- 9 ------+------- 9 ------+----- 9 -----+---- 12 ----+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                          Virtual Address</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>프로세스는 <code>KERN_BASE</code> (0x8004000000) 미만의 가상주소값을 갖는 독립적인 유저(가상)페이지 집합 <ul><li>↔  커널(가상)페이지 집합은 전역적, 어떤 것이 프로세스가 실행 되어도 같은 위치</li></ul></li></ul></li><li><p>Frames</p><ul><li>물리 프레임 = 페이지 프레임 = 페이지</li><li>물리 메모리 상의 연속적인 영역</li><li>페이지와 동일한 프레임 페이지 사이즈, 페이지 크기에 정렬</li><li>64bit 물리 주소는 프레임 넘버와 프레임 오프셋으로 나누어짐</li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                          12 11         0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    +-----------------------+-----------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    |      Frame Number     |   Offset  |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    +-----------------------+-----------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">              Physical Address</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>x86-64 시스템은 물리주소에 있는 메모리에 직접 접근방식이 아님</li><li>Pintos는 커널 가상 메모리를 물리 메모리에 직접 매핑</li></ul><div class="hint-container info"><p class="hint-container-title">정보</p><p>커널 가상 메모리를 통하면 프레임들에 접근할 수 있다.</p></div></li><li><p>Page Tables</p><ul><li>페이지를 프레임으로 변환 하기위해 사용하는 자료구조(CPU가 가상주소 → 물리주소)</li><li>페이지 테이블 포맷은 x86-64 아키텍쳐에 의해 결정</li><li><code>thread/mmu.c</code> 페이지 테이블 관리 코드 제공</li></ul><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 페이지 테이블은 페이지 넘버를 프레임 넘버로 변환하며, </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 물리주소를 획득하기 위해서 수정되지 않는 오프셋과 결합</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                           +----------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          .</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">---------------&gt;|</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Page Table</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-----------</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">         /</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                 +----------+</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">           |</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        |</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">   12</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                               V  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    +---------+----+</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                         +---------+----+</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    |</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Page Nr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Ofs</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                         |</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Frame Nr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Ofs</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    +---------+----+</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                         +---------+----+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     Virt Addr   </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            Phys Addr    </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">^</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                  \\_______________________________________</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Swap Slots</p><ul><li>스왑 파티션 내의 디스크 공간에 있는 페이지 크기의 영역</li><li>페이지 크기에 정렬하는 것이 좋다.</li></ul></li></ul></li><li><p>Resource Management Overview(자원관리 개요)</p><blockquote><p>자료구조들을 설계하고 구현해라</p><ul><li>Supplemental page table(보조 페이지 테이블) <ul><li>페이지 테이블을 보조하여 페이지 폴트(page fault) 핸들링이 가능 하도록</li><li>아래 보조페이지 테이블 관리 부분 참고</li></ul></li><li>Frame table <ul><li>물리프레임의 퇴거 정책(eviction policy)을 효율적으로 구현</li><li>아래 프레임 테이블 관리 부분 참고</li></ul></li><li>Swap table <ul><li>스왑 슬롯이 사용되는 것을 추적</li><li>아래참고</li></ul></li></ul></blockquote></li></ul><h2 id="구현" tabindex="-1"><a class="header-anchor" href="#구현"><span>구현</span></a></h2><p>양이 많아 노션에 정리한 링크로 대체</p><p><a href="https://www.notion.so/Part-1-Memory-Management-92ac10e50f3648d488f1ecbeb60b2784?pvs=21" target="_blank" rel="noopener noreferrer">Part 1 : Memory Management</a></p><p><a href="https://www.notion.so/Part-2-Anonymous-Page-Lazy-Loading-7232044531804c24802c084ee42ac660?pvs=21" target="_blank" rel="noopener noreferrer">Part 2 : Anonymous Page &amp; Lazy Loading</a></p><p><a href="https://www.notion.so/Part-3-Stack-Growth-064f6aa6965843669acfb3507ebf6c79?pvs=21" target="_blank" rel="noopener noreferrer">Part 3 : Stack Growth</a></p><p><a href="https://www.notion.so/Part-4-Memory-Mapped-Files-File-Backed-Mapping-921f8ebd2fdf45a9a3896ffed982b7f4?pvs=21" target="_blank" rel="noopener noreferrer">Part 4 : Memory Mapped Files(File Backed Mapping)</a></p><p><a href="https://www.notion.so/Part-5-Swap-In-Out-394937cac7324bc0bc9407cf1aa47fea?pvs=21" target="_blank" rel="noopener noreferrer">Part 5 : Swap In/Out(작성중)</a></p>`,11);function o(d,c){return n(),s("div",null,[p,e(" more "),h])}const m=l(r,[["render",o],["__file","WEEK10~13-Pintos_Project3_Virtual Memory.html.vue"]]),g=JSON.parse(`{"path":"/blog/posts/SW%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90%EC%A0%95%EA%B8%80/WEEK10~13-Pintos_Project3_Virtual%20Memory.html","title":"WEEK10~13-Pintos_Project3_Virtual Memory","lang":"ko-KR","frontmatter":{"title":"WEEK10~13-Pintos_Project3_Virtual Memory","icon":"pen-to-square","date":"2022-12-06T00:00:00.000Z","category":["Develop"],"tags":["SW사관학교정글","Develop"],"description":"SW사관학교 정글 5기 10~13주차 정리","head":[["meta",{"property":"og:url","content":"https://www.levih.me/blog/posts/SW%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90%EC%A0%95%EA%B8%80/WEEK10~13-Pintos_Project3_Virtual%20Memory.html"}],["meta",{"property":"og:site_name","content":"It's Blog"}],["meta",{"property":"og:title","content":"WEEK10~13-Pintos_Project3_Virtual Memory"}],["meta",{"property":"og:description","content":"SW사관학교 정글 5기 10~13주차 정리"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-08-16T16:42:47.000Z"}],["meta",{"property":"article:author","content":"Levi"}],["meta",{"property":"article:tag","content":"SW사관학교정글"}],["meta",{"property":"article:tag","content":"Develop"}],["meta",{"property":"article:published_time","content":"2022-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-16T16:42:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WEEK10~13-Pintos_Project3_Virtual Memory\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-16T16:42:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Levi\\",\\"url\\":\\"https://levih.me\\"}]}"]]},"headers":[{"level":2,"title":"1. Virtual Memory 관련 모르는 용어 정리","slug":"_1-virtual-memory-관련-모르는-용어-정리","link":"#_1-virtual-memory-관련-모르는-용어-정리","children":[]},{"level":2,"title":"2. 과제 설명서 요약","slug":"_2-과제-설명서-요약","link":"#_2-과제-설명서-요약","children":[]},{"level":2,"title":"구현","slug":"구현","link":"#구현","children":[]}],"git":{"createdTime":1723826567000,"updatedTime":1723826567000,"contributors":[{"name":"kyu91","email":"hongsk5689@gmail.com","commits":1}]},"readingTime":{"minutes":0.9,"words":269},"filePathRelative":"blog/posts/SW사관학교정글/WEEK10~13-Pintos_Project3_Virtual Memory.md","localizedDate":"2022년 12월 6일","excerpt":"<ul>\\n<li>SW사관학교 정글 5기 10~13주차 정리</li>\\n</ul>\\n","autoDesc":true}`);export{m as comp,g as data};

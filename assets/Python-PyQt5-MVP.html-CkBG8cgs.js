import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as t,d as l,e as n,o}from"./app-iAP37dAT.js";const r="/vue-press/assets/image-1-teAyiY25.png",p="/vue-press/assets/image-CJe_JyUz.png",s="/vue-press/assets/image-2-Cju6Q-Iy.png",c="/vue-press/assets/image-3-DXOFCSmy.png",m="/vue-press/assets/image-4-D9CjKnWO.png",h={};function d(g,e){return o(),a("div",null,[e[0]||(e[0]=t("ul",null,[t("li",null,"아버님 사무실에 놀러갔다가 명령 받은 고객관리 시스템 구축 과정을 정리한다.")],-1)),l(" more "),e[1]||(e[1]=n('<h2 id="왜-갑자기-window-app을-만드는가" tabindex="-1"><a class="header-anchor" href="#왜-갑자기-window-app을-만드는가"><span>왜 갑자기 Window App을 만드는가?</span></a></h2><p>나의 아버지는 맹인 지압원을 운영 하시고,<br> 이를 위해 오시는 환자분들의 예약, 처치 내역, 치료 결제 내역, 환자 정보 등을 관리 하셔야 한다.<br> 연세가 벌써 60 중반대이시다 보니 이런 데이터들을 관리하는데 어려움이 있다고 하셨다.<br> 현재는 엑셀로 관리를 하고 있는데, 거의 5년 넘게 저장한 데이터들을 관리하다 보니 어려운 점이 한두개가 아니라고 하셨다.<br> 그래서 효자인 나는 이 문제를 해결해 보고자 하였다.<br><a href="https://www.levih.me/tech-product/saas/DDEVI%EB%A1%9C-%EC%96%B4%EB%A8%B8%EB%8B%88-%ED%9A%8C%EC%82%AC-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EC%96%B4-%EC%A3%BC%EA%B8%B0.html" target="_blank" rel="noopener noreferrer">DDEVI로 어머니 회사 홈페이지 만들어 주기 글</a> 참고하기</p><h2 id="데이터-관리-현황" tabindex="-1"><a class="header-anchor" href="#데이터-관리-현황"><span>데이터 관리 현황</span></a></h2><ul><li>달력 포맷으로 관리하는 엑셀 파일이 있고, 해당 파일에서 약 7년간의 예약 일정을 관리중</li><li>환자 데이터는 나이대(20~30대)별로 엑셀파일이 있고, 환자별로 시트가 있음</li><li>환자별 시트에는 환자 상세 데이터와 그 환자의 예약 내역, 결제 내역, 처치내역 등이 있음</li></ul><h2 id="pain-point-분석" tabindex="-1"><a class="header-anchor" href="#pain-point-분석"><span>Pain Point 분석</span></a></h2><ol><li>달력에 엑셀에 많은 데이터가 있다보니, 히스토리를 찾기 힘듬</li><li>환자 데이터를 나이대 별로 관리를 하다보니, 시간이 지났을때 나이대에서 벗어나는 문제</li><li>환자 데이터가 여러 파일로 나누어져 있다보니 환자 검색이 거의 불가능함</li><li>환자별로의 예약/처치 내용이 따로 관리 되다 보니 예약 정보와 연동 되지 않음</li><li>환자데이터의 명확한 데이터 필드가 정의되어 있지 않음</li></ol><h2 id="해결-방안-아이데이션" tabindex="-1"><a class="header-anchor" href="#해결-방안-아이데이션"><span>해결 방안 아이데이션</span></a></h2><p>우선 환자 데이터에 대한 Low Data를 하나로 통합 하여 관리하고,<br> 해당 DB에서 원하는 데이터를 보여주는 뷰페이지가 필요하다고 판단했다.<br> 그리고 예약 등록을 시스템화 하고, 이름+생년월일을 키로 하여 Low Data를 추가/수정 할 수 있도록 해야 한다.</p><h2 id="mvp-설계" tabindex="-1"><a class="header-anchor" href="#mvp-설계"><span>MVP 설계</span></a></h2><p>우선 주요 구조와 기능 구현의 MVP를 설계해보자</p><ol><li>MVP 아키텍쳐<br><img src="'+r+'" alt="alt text" loading="lazy"></li><li>MVP App Home 화면<br><img src="'+p+'" alt="alt text" loading="lazy"></li><li>MVP App 예약하기 화면<br><img src="'+s+'" alt="alt text" loading="lazy"></li><li>MVP App 예약 내역 보기 화면<br><img src="'+c+'" alt="alt text" loading="lazy"></li><li>MVP App 환자별 상세 정보<br><img src="'+m+'" alt="alt text" loading="lazy"></li></ol><h2 id="사용-언어-및-라이브러리" tabindex="-1"><a class="header-anchor" href="#사용-언어-및-라이브러리"><span>사용 언어 및 라이브러리</span></a></h2><ul><li>Python</li><li>PyQt5</li><li>sqlite3</li></ul><p>다음 포스트에서부터 상세 기능들에 대한 구현을 시작 하자</p>',14))])}const P=i(h,[["render",d],["__file","Python-PyQt5-MVP.html.vue"]]),v=JSON.parse(`{"path":"/dev/Python-PyQt5-MVP.html","title":"Python으로 고객 관리 시스템 만들기-MVP 설계편","lang":"ko","frontmatter":{"title":"Python으로 고객 관리 시스템 만들기-MVP 설계편","icon":"pen-to-square","date":"2024-09-27T00:00:00.000Z","star":true,"category":["Dev"],"tags":["GUI","Python","PyQt5","SQLite"],"description":"아버님 사무실에 놀러갔다가 명령 받은 고객관리 시스템 구축 과정을 정리한다.","head":[["meta",{"property":"og:url","content":"https://www.levih.me/vue-press/dev/Python-PyQt5-MVP.html"}],["meta",{"property":"og:site_name","content":"It's Blog"}],["meta",{"property":"og:title","content":"Python으로 고객 관리 시스템 만들기-MVP 설계편"}],["meta",{"property":"og:description","content":"아버님 사무실에 놀러갔다가 명령 받은 고객관리 시스템 구축 과정을 정리한다."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko"}],["meta",{"property":"og:updated_time","content":"2025-02-03T07:03:21.000Z"}],["meta",{"property":"article:tag","content":"GUI"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"PyQt5"}],["meta",{"property":"article:tag","content":"SQLite"}],["meta",{"property":"article:published_time","content":"2024-09-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-03T07:03:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python으로 고객 관리 시스템 만들기-MVP 설계편\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-27T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-03T07:03:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Levi\\",\\"url\\":\\"https://levih.me\\"}]}"]]},"headers":[{"level":2,"title":"왜 갑자기 Window App을 만드는가?","slug":"왜-갑자기-window-app을-만드는가","link":"#왜-갑자기-window-app을-만드는가","children":[]},{"level":2,"title":"데이터 관리 현황","slug":"데이터-관리-현황","link":"#데이터-관리-현황","children":[]},{"level":2,"title":"Pain Point 분석","slug":"pain-point-분석","link":"#pain-point-분석","children":[]},{"level":2,"title":"해결 방안 아이데이션","slug":"해결-방안-아이데이션","link":"#해결-방안-아이데이션","children":[]},{"level":2,"title":"MVP 설계","slug":"mvp-설계","link":"#mvp-설계","children":[]},{"level":2,"title":"사용 언어 및 라이브러리","slug":"사용-언어-및-라이브러리","link":"#사용-언어-및-라이브러리","children":[]}],"git":{"createdTime":1727418736000,"updatedTime":1738566201000,"contributors":[{"name":"Levi","username":"Levi","email":"hongsk5689@gmail.com","commits":1,"url":"https://github.com/Levi"},{"name":"Levi","username":"Levi","email":"levi@Leviui-MacBookAir-5.local","commits":1,"url":"https://github.com/Levi"}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"dev/Python-PyQt5-MVP.md","localizedDate":"2024년 9월 27일","excerpt":"<ul>\\n<li>아버님 사무실에 놀러갔다가 명령 받은 고객관리 시스템 구축 과정을 정리한다.</li>\\n</ul>\\n","autoDesc":true}`);export{P as comp,v as data};

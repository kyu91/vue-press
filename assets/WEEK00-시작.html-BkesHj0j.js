import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as i,f as a,e as p,o as n}from"./app-B-0nbuvk.js";const o={};function r(s,l){return n(),t("div",null,[l[0]||(l[0]=i("ul",null,[i("li",null,"SW사관학교 정글 5기 00주차 후기")],-1)),a(" more "),l[1]||(l[1]=p('<p>9월 19일부터  SW사관학교 정글 정식 일정이 시작됐다.</p><h2 id="orientation" tabindex="-1"><a class="header-anchor" href="#orientation"><span>ORIENTATION</span></a></h2><ol><li><p>임원진 분들의 소개와 PT 발표 후 바로 시작됐다.</p></li><li><p>발표를 보는데 유튜브 보는 기분이었다. 매번 볼 때마다 느끼는 거지만 바쁘신 중에 와주시는 것이 정말 힘이 된다.</p></li></ol><h2 id="첫-번째-과제-3박-4일간-미니-프로젝트-만들기" tabindex="-1"><a class="header-anchor" href="#첫-번째-과제-3박-4일간-미니-프로젝트-만들기"><span>첫 번째 과제(3박 4일간 미니 프로젝트 만들기)</span></a></h2><ol><li><p>과제 소개는 매우 간단하다.</p></li><li><p>한 조당 3명으로 구성되며, 로그인 기능/Jinja2 탬플릿을 이용한 서버사이드 렌더링, JWT 인증방식을 적용하여 홈페이지 하나 만들면 된다.</p></li><li><p>기숙사에서 노트북만 가져왔는데, 일정은 그렇게 바로 시작되었다.</p></li></ol><h2 id="주제-선정-및-pt-준비" tabindex="-1"><a class="header-anchor" href="#주제-선정-및-pt-준비"><span>주제 선정 및 PT 준비</span></a></h2><ol><li><p>조를 정말 잘 만났다. 힘든 정글 일정에 지금까지도 큰 힘이 되고 있다.</p></li><li><p>주제는 익명의 커뮤니티를 만들어 게시판과 댓글로 소통을 하는 공간을 기획했다.</p></li><li><p>주제발표는 다른 조원분이 해주셨다.</p></li></ol><h2 id="프로젝트-시작" tabindex="-1"><a class="header-anchor" href="#프로젝트-시작"><span>프로젝트 시작</span></a></h2><ol><li><p>이전 회사에서 게시판에 댓글 기능을 달아달라고 했던 나에게 욕하고 싶었다.</p></li><li><p>로그인 기능이 추가되면서 로그인 후 접속하는 모든 컨탠츠들에 대해 고려해야 할 점들이 생기며, 이로 인해 API의 구조가 중요한 것을 크게 느꼈다.</p></li><li><p>우리 조는 전공자도 없으며, JAVA를 공부하고 왔던 분이 개발 쪽 경험이 가장 많으셨다.</p></li><li><p>나로서는 너무 막막했지만 다시 한번 조원들에게 감사하다.</p></li><li><p>기능별로 작업을 나눠서 시작했으며, 나는 회원가입 기능을 맡았다.</p></li><li><p>한 번도 해보지 못했지만 결국 했다. 내 기준에 깔끔하게 잘된 거 같다.</p></li><li><p>회원가입을 먼저 완료하여 게시판 댓글 기능을 내가 먼저 시작했다.</p></li></ol><h2 id="문제-봉착" tabindex="-1"><a class="header-anchor" href="#문제-봉착"><span>문제 봉착</span></a></h2><ol><li><p>계획은 이랬다. (누구나 그럴싸한 계획은 있다.)</p><ul><li>작성자가 로그인 후 a게시판에 댓글을 쓴다.</li><li>작성되면 서버로 보내 별도의 댓글 db에 넣는다.</li><li>성공하면 return 받아 jinja2로 a게시판에 뿌려준다.</li><li>댓글에는 등록자의 이름(익명)과 댓글 내용이 보인다.</li></ul></li><li><p>문제 1, 댓글을 작성한 게시판을 판별하기</p><ul><li>댓글 등록 기능을 만들고 jinja2로 불러오려고 하니, 웬걸, 게시판을 판별할 고유 키가 없었다.</li><li>하지만 mongodb는 오브젝트 ID가 있었고, 게시판을 만들고 있는 조원에게 jinja2로 게시글 불러올 때 해당 오브젝트 ID도 같이 불러올 것을 요청했다.</li><li>그리고 내 생각은 &#39;프런트에서 jinja2로 반복문 돌려 댓글 가져오면 되겠네, 개꿀&#39;이라고 생각했다.</li><li>그러나, 이놈에 jinja2는 내 생각처럼 해주지 않았고 거의 5시간을 붙잡았지만 결국 이 방법은 실패했다.</li><li>그래서 방법을 바꾸어 Flask에서 먼저 체크를 하고 jinja2로 보내주는 방식으로 변경했다.(이 부분은 다른 조원분이 크게 도와주셨다. 다시 한번 감사합니다.)</li><li>해결 완료</li></ul></li><li><p>문제 2, 게시물 &#39;더보기&#39; 버튼</p><ul><li>게시물에 &#39;더보기&#39;버튼이 있고 이걸 클릭하면 뿅 하고 게시물의 내용과 댓글이 보이는 방식이다.</li><li>javascript를 공부한 나에게 이건 껌이지 하는 생각으로 구현 후 실행했다.</li><li>근데, 더보기를 누르면 모든 게시판이 더보기가 됐다.</li><li>의도와 다르게 홈페이지는 너무 풍성해졌고, &#39;아 이것도 어떤 게시판인지 읽어 와야 하는구나&#39; 깨달은 나는 바로 수정했다.</li><li>완료</li></ul></li><li><p>문제 3, 댓글 입력 후 더보기 버튼 닫힘</p><ul><li>댓글은 더보기 버튼으로 열어야 입력할 수 있다.</li><li>근데, 댓글을 입력하면 더보기 버튼이 닫혀버린다.</li><li>내가 댓글을 입력하고 등록하면 그걸 보기 위해 다시 클릭을 해야 한다? 내가 사용자라면 생각만 해도 너무 화난다.</li><li>사용자의 편의성을 회사에서부터 중요하게 생각해 온 난 해결할 수 있을 것이란 믿음으로 수정했다.</li><li>그러나, 안됐다. 여러분들과 구글님에게 물어봤지만 답을 얻을 수 없었다.</li><li>그렇게 제출 시간이 나가 와서 제출해버렸다.</li></ul></li></ol><h2 id="프로젝트-발표" tabindex="-1"><a class="header-anchor" href="#프로젝트-발표"><span>프로젝트 발표</span></a></h2><ol><li><p>이번 발표는 내가 맡았다.</p></li><li><p>나름 회사에서 PT를 많이 해봤던 난 자신감이 있었다.라고 최면을 걸기 시작했다.</p></li><li><p>발표는 의장님과 코치님이 봐주셨는데, 난 긴장을 너무해서 시연하는데 계속 오타가 났다.</p></li><li><p>발표가 나름 재밌었나 보다. 동기들이 오타도 일부로 낸 줄 알았다고 했다. 난 손 떨어서 낸 건데.</p></li></ol><h2 id="week00-후-느낀-점" tabindex="-1"><a class="header-anchor" href="#week00-후-느낀-점"><span>WEEK00 후 느낀 점</span></a></h2><ol><li><p>성장했다</p><ul><li>난 이 감정을 느끼기 위해 정글에 지원했고 또 이전에도 살았었다.</li><li>어제보다 오늘 더 성장했다는 생각이 들어 좋았다.</li></ul></li><li><p>팀의 중요성</p><ul><li>전도서에 이런 말이 있다. &#39;한 사람이면 패하겠거니와 두 사람이면 능이당하나니 삼겹줄은 쉽게 끊어지지 않는다&#39;</li><li>내가 좋아하는 말이고 정글에 와서 매주 느낄 거 같다.</li></ul></li><li><p>부족한 점</p><ul><li>너무 많다. 아직 자료형에 대해서도 정확히 공부하지 못했고 문법공부도 할게 많다.</li><li>특히 API를 다루는 부분은 정말 모르겠다.</li><li>앞으로 더 노력해야 할 것 같다</li></ul></li><li><p>그럼에도 할 수 있다.</p><ul><li>그럼에도 조금씩 앞으로 가는 게 정글이다.</li><li>늦어도 조금씩 가면 뒤를 돌아봤을 때 내가 온 길을 뿌듯하게 볼 수 있기를 바래본다.</li></ul></li></ol>',15))])}const h=e(o,[["render",r],["__file","WEEK00-시작.html.vue"]]),m=JSON.parse(`{"path":"/blog/SW%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90%EC%A0%95%EA%B8%80/WEEK00-%EC%8B%9C%EC%9E%91.html","title":"WEEK00-시작","lang":"ko-KR","frontmatter":{"title":"WEEK00-시작","icon":"pen-to-square","date":"2022-09-24T00:00:00.000Z","order":2,"category":["All","SW사관학교정글"],"tags":["SW사관학교정글","Develop"],"description":"SW사관학교 정글 5기 00주차 후기","head":[["meta",{"property":"og:url","content":"https://www.levih.me/blog/SW%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90%EC%A0%95%EA%B8%80/WEEK00-%EC%8B%9C%EC%9E%91.html"}],["meta",{"property":"og:site_name","content":"It's Blog"}],["meta",{"property":"og:title","content":"WEEK00-시작"}],["meta",{"property":"og:description","content":"SW사관학교 정글 5기 00주차 후기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-09-04T06:32:54.000Z"}],["meta",{"property":"article:author","content":"Levi"}],["meta",{"property":"article:tag","content":"SW사관학교정글"}],["meta",{"property":"article:tag","content":"Develop"}],["meta",{"property":"article:published_time","content":"2022-09-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-04T06:32:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WEEK00-시작\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-04T06:32:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Levi\\",\\"url\\":\\"https://levih.me\\"}]}"]]},"headers":[{"level":2,"title":"ORIENTATION","slug":"orientation","link":"#orientation","children":[]},{"level":2,"title":"첫 번째 과제(3박 4일간 미니 프로젝트 만들기)","slug":"첫-번째-과제-3박-4일간-미니-프로젝트-만들기","link":"#첫-번째-과제-3박-4일간-미니-프로젝트-만들기","children":[]},{"level":2,"title":"주제 선정 및 PT 준비","slug":"주제-선정-및-pt-준비","link":"#주제-선정-및-pt-준비","children":[]},{"level":2,"title":"프로젝트 시작","slug":"프로젝트-시작","link":"#프로젝트-시작","children":[]},{"level":2,"title":"문제 봉착","slug":"문제-봉착","link":"#문제-봉착","children":[]},{"level":2,"title":"프로젝트 발표","slug":"프로젝트-발표","link":"#프로젝트-발표","children":[]},{"level":2,"title":"WEEK00 후 느낀 점","slug":"week00-후-느낀-점","link":"#week00-후-느낀-점","children":[]}],"git":{"createdTime":1723826567000,"updatedTime":1725431574000,"contributors":[{"name":"kyu91","email":"hongsk5689@gmail.com","commits":1},{"name":"대웅펫","email":"hongsk5689@gmail.com","commits":1}]},"readingTime":{"minutes":0.48,"words":144},"filePathRelative":"blog/SW사관학교정글/WEEK00-시작.md","localizedDate":"2022년 9월 24일","excerpt":"<ul>\\n<li>SW사관학교 정글 5기 00주차 후기</li>\\n</ul>\\n","autoDesc":true}`);export{h as comp,m as data};

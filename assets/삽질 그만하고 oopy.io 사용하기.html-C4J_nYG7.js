import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as o,d as e,b as a,o as l}from"./app-BtYN9Os0.js";const p="/assets/20240730093225-MtBZ8vYE.png",n="/assets/Untitled234-D_1JNbpZ.png",r="/assets/Untitled434333-D_ZpO7ZQ.png",s={},c=e("ul",null,[e("li",null,"길었던 그동안의 삽질을 뒤로하고 oopy에 돈을 써보자")],-1),h=a('<h2 id="개요" tabindex="-1"><a class="header-anchor" href="#개요"><span>개요</span></a></h2><h3 id="next-js로-notion-cms-블로그-만들기-포기한-이유" tabindex="-1"><a class="header-anchor" href="#next-js로-notion-cms-블로그-만들기-포기한-이유"><span>Next.js로 notion cms 블로그 만들기 포기한 이유</span></a></h3><p>우선 하기 북마크는 내가 Notion 을 CMS로 사용하는 블로그를 만들기 위해 무엇을 했는지 정리가 되어있다.</p><p><a href="https://www.kyu91.me/e6eedb9f-b521-434e-9917-eca30c1f03a3" target="_blank" rel="noopener noreferrer">Notion을 CMS로 사용하는 블로그-총정리</a></p><p><code>문제점</code>이 하나 있었는데, 해당 Github 소스는 동적으로 sitemap을 만들고 이전 sitemap과 비교하여 새로 생긴 것이 있다면, 웹에 로드해주는 방식을 하고 있다.</p><div class="hint-container tip"><p class="hint-container-title">팁</p><p>즉, 페이지가 많아지면 많아질 수록 불러와야 하는 sitemap은 많아지고 로드하는데 시간이 오래 걸린다.</p></div><p>이점을 해결하기 위해 sitemap을 동적으로 만들어주는 코드를 최적화 하는 작업도 진행 했지만 실패했다. 너무 하위 페이지들이 많았기 때문이다.</p><p>그렇다고 sitemap을 안쓰면 내가 새로 작성한 노션의 글이 업로드가 되지 않았다.</p><p>해당 문제를 결국 해결을 하지 못하고 난 돈을 쓰기로 했다.</p><h2 id="후보군" tabindex="-1"><a class="header-anchor" href="#후보군"><span>후보군</span></a></h2><h3 id="_1-vercel-pro-사용" tabindex="-1"><a class="header-anchor" href="#_1-vercel-pro-사용"><span>1. Vercel Pro 사용</span></a></h3><p><a href="https://github.com/transitive-bullshit/nextjs-notion-starter-kit" target="_blank" rel="noopener noreferrer">nextjs-notion-starter-kit</a>의 Issues 에서도 나와 동일한 문제를 호소하는 사람들이 있었고 그들은 해결방법으로 Vercel Pro를 사용 하는 방법으로 해결했다고 했다. (얼탱이 없음)</p><p>해당 비용은 월 20$… 바로 포기했다.</p><h3 id="_2-super-so" tabindex="-1"><a class="header-anchor" href="#_2-super-so"><span>2. super.so</span></a></h3><p><a href="https://super.so/" target="_blank" rel="noopener noreferrer">Super — Create Websites with Notion</a></p><p>해외의 oopy라고 생각하면 쉽다.</p><p>무료로도 사용이 가능하다! 하지만 커스텀 도메인을 사용하기 위해선 유로 플랜을 사용해야 하고 그 가격은 다음과 같다. 월 16$ → 포기</p><figure><img src="'+p+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="_3-oopy-io" tabindex="-1"><a class="header-anchor" href="#_3-oopy-io"><span>3. oopy.io</span></a></h3><p><a href="https://www.oopy.io/" target="_blank" rel="noopener noreferrer">1분 만에 만드는 노션 웹사이트, 우피!</a></p><p>무료체험 기간이 있긴 하지만 기본으로 유료이다.</p><p>하지만 기본 플랜이 매우 저렴하고 다른 우피 사용자 도메인을 입력하면 1개월 50% 할인도 해준다.</p><p><a href="https://www.oopy.io/ko/pricing" target="_blank" rel="noopener noreferrer">가격 안내</a></p><ul><li>플랜별 가격 <ul><li>베이직 플랜: 5,900원</li><li>프로 플랜: 9,900원</li></ul></li></ul><p>베이직과 프로의 차이점은 GNB 메뉴를 구성 할 수 있는 점과 페이지별 유저 트래킹을 지원해주는 점 인 것으로 확인 했다. (Pageview referrer의 정확한 기능은 파악하지 못하여서 확인 필요!)</p><p>기본 플랜에서도 커스텀 도메인을 사용 할 수 있으므로 oopy로 선택 했다.</p><h2 id="지금까지-후기" tabindex="-1"><a class="header-anchor" href="#지금까지-후기"><span>지금까지 후기</span></a></h2><h3 id="장점" tabindex="-1"><a class="header-anchor" href="#장점"><span>장점</span></a></h3><ol><li><p>자잘한 오류가 없다</p><p>생각보다 자잘한 오류가 없었고, 홈페이지가 조금 느리긴 하지만 안정적으로 돌아가는게 마음에 들었다.</p></li><li><p>HTML / CSS 커스텀</p><p>베이직 플랜에서 된다는게 대박이라고 생각한다. HTML 블록을 노션에 넣어 커스텀 할 수 있고, 자체 에디터에서 넣을 수 도 있다.</p></li><li><p>베이직에서 지원되는 너무 많은 편의 기능</p><p>너무 찬양하는 것 같긴 한데, 베이직만 해도 oopy의 99%기능을 모두 활용 할 수 있다고 말할 수 있다.</p><p>특히 개인적으로 “이걸 베이직에서?”하는 기능을 고른다면,</p><ul><li>커스텀 도메인 + 리다이랙트 주소 설정</li><li>CTA 버튼 생성 + 트레킹</li><li>노션 데이터 베이스 뷰어 설정</li><li><code>head</code>, <code>body</code> 커스텀</li><li>편리한 플러그인 설정</li><li>그외 등등</li></ul></li><li><p>싸다</p></li></ol><h3 id="단점" tabindex="-1"><a class="header-anchor" href="#단점"><span>단점</span></a></h3><ul><li>느린편 <ul><li>방문했던 페이지는 캐싱하여 재방문 시 금방 로드 되지만 처음 방문하는 페이지는 많이 느리다고 체감이 되었다.</li></ul></li><li>sitemap.xml 자동 생성 안됨 <ul><li>이부분이 가장 큰 단점으로 왔다.</li><li>물론 <code>클린URL</code> 이라는 기능을 사용하며, 내 노션 페이지를 등록 해두면 해당 페이지가 sitemap으로 등록이 되었다. <ul><li><p>등록한 클린 URL 목록</p><figure><img src="'+n+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>sitemap.xml</p><figure><img src="'+r+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li></ul></li></ul></li></ul><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론"><span>결론</span></a></h2><p>계속 사용 할 것 같다.</p><div class="hint-container tip"><p class="hint-container-title">팁</p><p>개발(코딩)을 모르더라도 사용 할 수 있고, 개발에 대한 지식이 조금이라도 있다면, 몇배 더 잘 사용 할 수 있는 플랫폼이다.</p></div><p>1인 개발자로 시작한 플랫폼이라고 하는데, 정말 존경 스럽다.</p><p>혹시나 인터뷰할 일이 생긴다면 어떤식으로 그렇게 빠르게 노션 페이지를 불러 올 수 있는지 물어보고 싶다. 원리가 궁금하다.</p><p>oopy 사장님 저 열심히 썼는데, 쿠폰 하나 주세요.</p>',37);function d(m,u){return l(),i("div",null,[c,o(" more "),h])}const y=t(s,[["render",d],["__file","삽질 그만하고 oopy.io 사용하기.html.vue"]]),f=JSON.parse(`{"path":"/blog/SaaS/%EC%82%BD%EC%A7%88%20%EA%B7%B8%EB%A7%8C%ED%95%98%EA%B3%A0%20oopy.io%20%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html","title":"삽질 그만하고 oopy.io 사용하기","lang":"ko-KR","frontmatter":{"title":"삽질 그만하고 oopy.io 사용하기","icon":"pen-to-square","date":"2024-01-29T00:00:00.000Z","category":["SaaS"],"tags":["Notion","oopy"],"description":"길었던 그동안의 삽질을 뒤로하고 oopy에 돈을 써보자","head":[["meta",{"property":"og:url","content":"https://www.levih.me/blog/SaaS/%EC%82%BD%EC%A7%88%20%EA%B7%B8%EB%A7%8C%ED%95%98%EA%B3%A0%20oopy.io%20%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html"}],["meta",{"property":"og:site_name","content":"It's Blog"}],["meta",{"property":"og:title","content":"삽질 그만하고 oopy.io 사용하기"}],["meta",{"property":"og:description","content":"길었던 그동안의 삽질을 뒤로하고 oopy에 돈을 써보자"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-08-26T11:30:09.000Z"}],["meta",{"property":"article:author","content":"Levi"}],["meta",{"property":"article:tag","content":"Notion"}],["meta",{"property":"article:tag","content":"oopy"}],["meta",{"property":"article:published_time","content":"2024-01-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-26T11:30:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"삽질 그만하고 oopy.io 사용하기\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-26T11:30:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Levi\\",\\"url\\":\\"https://levih.me\\"}]}"]]},"headers":[{"level":2,"title":"개요","slug":"개요","link":"#개요","children":[{"level":3,"title":"Next.js로 notion cms 블로그 만들기 포기한 이유","slug":"next-js로-notion-cms-블로그-만들기-포기한-이유","link":"#next-js로-notion-cms-블로그-만들기-포기한-이유","children":[]}]},{"level":2,"title":"후보군","slug":"후보군","link":"#후보군","children":[{"level":3,"title":"1. Vercel Pro 사용","slug":"_1-vercel-pro-사용","link":"#_1-vercel-pro-사용","children":[]},{"level":3,"title":"2. super.so","slug":"_2-super-so","link":"#_2-super-so","children":[]},{"level":3,"title":"3. oopy.io","slug":"_3-oopy-io","link":"#_3-oopy-io","children":[]}]},{"level":2,"title":"지금까지 후기","slug":"지금까지-후기","link":"#지금까지-후기","children":[{"level":3,"title":"장점","slug":"장점","link":"#장점","children":[]},{"level":3,"title":"단점","slug":"단점","link":"#단점","children":[]}]},{"level":2,"title":"결론","slug":"결론","link":"#결론","children":[]}],"git":{"createdTime":1722844238000,"updatedTime":1724671809000,"contributors":[{"name":"kyu91","email":"hongsk5689@gmail.com","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"blog/SaaS/삽질 그만하고 oopy.io 사용하기.md","localizedDate":"2024년 1월 29일","excerpt":"<ul>\\n<li>길었던 그동안의 삽질을 뒤로하고 oopy에 돈을 써보자</li>\\n</ul>\\n","autoDesc":true}`);export{y as comp,f as data};

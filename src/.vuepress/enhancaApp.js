export default ({ router, siteData, isServer }) => {
    if (!isServer) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@docsearch/js@3";
      script.async = true;
      script.onload = () => {
        docsearch({
          appId: "2XTKFZ77CR",
          apiKey: "e0cde7d7c15467da6229a26286ac0730",
          indexName: "levih",
          container: "### REPLACE ME WITH A CONTAINER (e.g. div) ###",
          debug: false,
        });
      };
      document.body.appendChild(script);
    }
  };
  
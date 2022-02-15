(this["webpackJsonpabout-me"]=this["webpackJsonpabout-me"]||[]).push([[0],{10:function(e,s,t){},12:function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),a=t(4),n=t.n(a),l=(t(10),t(5)),r=t(2),o=t(0),d=[{key:"#home",value:"Home"},{key:"#about",value:"About"},{key:"#skills",value:"Skills"},{key:"#projects",value:"Projects"},{key:"#work",value:"Work"}],j=function(){var e=Object(c.useState)(window.location.hash||"#home"),s=Object(r.a)(e,2),t=s[0],i=s[1],a=Object(c.useState)(!1),n=Object(r.a)(a,2),l=n[0],j=n[1];Object(c.useEffect)((function(){var e="dark"===localStorage.getItem("selected-theme");j(e),document.body.classList[e?"add":"remove"]("dark__theme")}),[]);return Object(o.jsxs)("ul",{className:"nav__list",children:[d.map((function(e){return Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)("a",{href:e.key,className:(s=e.key,s===t?"nav__link active":"nav__link"),onClick:function(){return i(e.key)},children:e.value})},e.key);var s})),Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"bx ".concat(l?"bx-sun":"bx-moon"," change__theme"),id:"theme-button",onClick:function(){return j(e=!l),document.body.classList.toggle("dark__theme",e),void localStorage.setItem("selected-theme",e?"dark":"light");var e}})})]})},h=function(){var e=Object(c.useState)(!1),s=Object(r.a)(e,2),t=s[0],i=s[1];return Object(o.jsxs)("nav",{className:"nav bd-grid",children:[Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"#home",className:"nav__logo",children:"Khang Le"})}),Object(o.jsx)("div",{className:t?"nav__menu show":"nav__menu",id:"nav-menu",children:Object(o.jsx)(j,{})}),Object(o.jsx)("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return i(!t)},children:Object(o.jsx)("i",{className:"bx bx-menu"})})]})},b=t.p+"static/media/home.c54f1134.png",m=function(){return Object(o.jsxs)("section",{className:"home bd-grid",id:"home",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"home__data",children:[Object(o.jsxs)("h1",{className:"home__title",children:["Hi,",Object(o.jsx)("br",{}),"I'm ",Object(o.jsx)("span",{className:"home__title-color",children:"Khang"}),".",Object(o.jsx)("br",{}),"A Solid Software Engineer"]}),Object(o.jsx)("a",{href:"mailto:tkhang1999@gmail.com",className:"button",children:"Contact"})]}),Object(o.jsxs)("div",{className:"home__social",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/tan-khang-le/",className:"home__social-icon",children:Object(o.jsx)("i",{className:"bx bxl-linkedin"})}),Object(o.jsx)("a",{href:"https://github.com/tkhang1999",className:"home__social-icon",children:Object(o.jsx)("i",{className:"bx bxl-github"})})]})]}),Object(o.jsx)("div",{className:"home__img",children:Object(o.jsx)("img",{src:b,alt:""})})]})},x=t.p+"static/media/about.02da6e71.png",u=function(){return Object(o.jsxs)("section",{className:"about section",id:"about",children:[Object(o.jsx)("h2",{className:"section-title",children:"About"}),Object(o.jsxs)("div",{className:"about__container bd-grid",children:[Object(o.jsx)("div",{className:"about__img",children:Object(o.jsx)("img",{src:x,alt:""})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"about__subtitle",children:"People call me Khang"}),Object(o.jsxs)("p",{className:"about__text",children:["I am a computer science enthusiast who love solving real-world problems. I graduated from Nanyang Technological University with a Bachelor of Engineering with Honours (Highest Distinction) in Computer Science.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"I have a great interest in developing full-stack applications, algorithms as well as AI, machine learning, and data science. To pursue my interests, I have taken two elective focuses during college, one in High Performance Computing and the other in Data Science and Analytics. In my free time, I enjoy cooking, playing table tennis, and jogging."]})]})]})]})},O=function(){return Object(o.jsxs)("section",{className:"skills section",id:"skills",children:[Object(o.jsx)("h2",{className:"section-title",children:"Skills"}),Object(o.jsxs)("div",{className:"skills__container bd-grid",children:[Object(o.jsx)("h2",{className:"skills__subtitle",children:"Profesional Skills"}),Object(o.jsx)("p",{className:"skills__text",children:"The technology stack that I'm currently working on includes, but not limited to, Python, Java, React.js, and Node.js."}),Object(o.jsxs)("div",{className:"skills__list",children:[Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"Python"})]})}),Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"Java"})]})}),Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"JavaScript/TypeScript"})]})}),Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"C/C++"})]})})]}),Object(o.jsxs)("div",{className:"skills__list",children:[Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"Golang"})]})}),Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"Machine Learning/Deep Learning"})]})}),Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"Data Science"})]})}),Object(o.jsx)("div",{className:"skills__data",children:Object(o.jsxs)("div",{className:"skills__names",children:[Object(o.jsx)("i",{className:"bx bx-code skills__icon"}),Object(o.jsx)("span",{className:"skills__name",children:"Web Full-stack Development"})]})})]})]})]})},_=function(){return Object(o.jsxs)("section",{className:"work section",id:"work",children:[Object(o.jsx)("h2",{className:"section-title",children:"Work Experience"}),Object(o.jsxs)("div",{className:"work__list",children:[Object(o.jsxs)("div",{className:"work__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{className:"work__subtitle",href:"https://www.goldmansachs.com/",children:"Goldman Sachs"})}),Object(o.jsxs)("p",{className:"work__text",children:["Analyst (Software Engineer) ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"Jul 2021 - Present"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsx)("li",{children:"Work concurrently in two engineering teams of Listed Clearing Department under Global Markets Division"}),Object(o.jsx)("li",{children:"Maintain various in-house clearing applications and microservices using Java Spring Boot that support the derivatives clearing business of millions of trades from both clients and clearing houses"}),Object(o.jsx)("li",{children:"Develop full-stack web dashboards for Prime Services in Marquee using Java and React.js as part of a digital strategy to help hedge funds manage risk, monitor portfolios, maintain liquidity, and build businesses"})]})]}),Object(o.jsxs)("div",{className:"work__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{className:"work__subtitle",href:"https://www.goldmansachs.com/",children:"Goldman Sachs"})}),Object(o.jsxs)("p",{className:"work__text",children:["Summer Analyst ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"Jul 2020 - Aug 2020"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsx)("li",{children:"Built a full-stack web dashboard for memory usage monitoring of multiple applications and concurrent processes running in the firm using Java Spring Boot and React.js"}),Object(o.jsx)("li",{children:"Collaborated with senior engineers to deploy the dashboard successfully and present results to the global team"})]})]}),Object(o.jsxs)("div",{className:"work__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{className:"work__subtitle",href:"https://www.paypal.com/",children:"PayPal"})}),Object(o.jsxs)("p",{className:"work__text",children:["Software Engineering Intern ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"Aug 2019 - Dec 2019"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsx)("li",{children:"Designed and worked on multiple RESTful web services in the Compliance platform using Java Spring Boot"}),Object(o.jsx)("li",{children:"Developed machine learning models that detect and reconcile regulatory breaches based on partial account data"}),Object(o.jsx)("li",{children:"Researched and proposed the open-source Conflict-free Replicated Data Type (CRDT) Counter designs in Java that support distributed systems and focus on eventual consistency"})]})]}),Object(o.jsxs)("div",{className:"work__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{className:"work__subtitle",href:"https://noviscient.com/",children:"Noviscient"})}),Object(o.jsxs)("p",{className:"work__text",children:["Junior Engineer (Apprenticeship under"," ",Object(o.jsx)("a",{href:"https://www.sginnovate.com/talentprogrammes",children:"SGInnovate Summation Programme"}),") ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"May 2019 - Aug 2019"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsx)("li",{children:"Built a full-stack web application that gives investors and alpha partners access to portfolio creation and monitoring tools using different technologies such as Django, Docker, PostgreSQL, and jQuery"}),Object(o.jsx)("li",{children:"Liaised with CTO to successfully deploy and present the demo website to investors"})]})]}),Object(o.jsxs)("div",{className:"work__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{className:"work__subtitle",href:"https://www.ackcio.com/",children:"Ackcio"})}),Object(o.jsxs)("p",{className:"work__text",children:["Intern Software Engineer ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"May 2018 - Aug 2018"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsx)("li",{children:"Developed a multi-threaded software running on Raspberry Pi to concurrently read and transmit real-time serial data for construction monitoring using Python and SQLite"}),Object(o.jsx)("li",{children:"Worked with senior engineers to deploy the software successfully to construction sites in Singapore and Korea"})]})]})]})]})},g=function(){return Object(o.jsxs)("section",{className:"projects section",id:"projects",children:[Object(o.jsx)("h2",{className:"section-title",children:"Projects"}),Object(o.jsxs)("div",{className:"projects__list",children:[Object(o.jsxs)("div",{className:"projects__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"projects__subtitle",children:"NTU Food Hunter"}),Object(o.jsxs)("p",{className:"projects__text",children:["Final Year Project supervised by Assoc. Prof. Hui Siu Cheung"," ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"Jun 2020 - May 2021"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsx)("li",{children:"Developed a website for food review and recommendation in NTU using Django, PostgreSQL, and React.js"}),Object(o.jsx)("li",{children:"Built LSTM and BERT deep learning models using Tensorflow with Yelp dataset that achieve promising performances of 66.76% and 70.52% respectively on the fine-grained sentiment analysis of food reviews"}),Object(o.jsx)("li",{children:"Researched and implemented a Part-of-Speech (POS) algorithm for food review summarization that extracts adjective-noun pairs from food reviews as review tags with an accuracy of nearly 95%"}),Object(o.jsxs)("li",{children:["Created a Solr-based information retrieval system using Learning To Rank and BERT for semantically similar food reviews retrieval, outperforming classical text retrieval methods (BM25 and tf-idf) by between 29% and 46% (Reproduction project for public access:"," ",Object(o.jsx)("a",{href:"https://github.com/tkhang1999/Solr-SBERT-semantic-search",children:"Solr-SBERT-semantic-search"}),")"]}),Object(o.jsxs)("li",{children:["Accepted ",Object(o.jsx)("a",{href:"https://arxiv.org/abs/2201.10978",children:"paper"})," to International Student Conference on Artificial Intelligence (",Object(o.jsx)("a",{href:"https://stcai.ai/",children:"STCAI"}),") 2021"]})]})]}),Object(o.jsxs)("div",{className:"projects__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"projects__subtitle",children:"COVID19 Status Chatbot"}),Object(o.jsxs)("p",{className:"projects__text",children:["Personal Project ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"May 2020"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsxs)("li",{children:["Created an interactive chatbot on multiple platforms to get real-time COVID-19 status globally or in any country using Node.js, Dialogflow (Google Cloud), and Heroku (Project link:"," ",Object(o.jsx)("a",{href:"https://github.com/tkhang1999/COVID19-status-webhook",children:"COVID19-status-webhook"}),")"]}),Object(o.jsx)("li",{children:"Invited to be a guest speaker at a Google Developer Groups (GDG) webinar to share my learning and chatbot development experiences on Google Cloud Platform"})]})]}),Object(o.jsxs)("div",{className:"projects__container bd-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"projects__subtitle",children:"Undergraduate Research Experience on CAmpus (URECA) - President Research Scholar"}),Object(o.jsxs)("p",{className:"projects__text",children:["Projects supervised by Assoc. Prof. Hui Siu Cheung ",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"Aug 2018 - Jun 2019"})]})]}),Object(o.jsxs)("dl",{children:[Object(o.jsx)("li",{children:"Invited to join research-intensive URECA programme in NTU for students with excellent academic standing"}),Object(o.jsx)("li",{children:"Developed full-stack Web-based Automatic Programming Assessment System (APAS) using Django to support multiple coding languages (C, Python, Java) and automate exam and report generations for Data Structures course"}),Object(o.jsx)("li",{children:"Initiated and led a team of 3 to create Web-based Automatic Relationship Recommendation System (NTUpartner) to connect people in NTU using Django with machine learning and NLP approaches for matching algorithms"})]})]})]})]})},p=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("p",{className:"footer__title",children:"Khang Le"}),Object(o.jsxs)("div",{className:"footer__social",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/tan-khang-le/",className:"footer__icon",children:Object(o.jsx)("i",{className:"bx bxl-linkedin"})}),Object(o.jsx)("a",{href:"https://github.com/tkhang1999",className:"footer__icon",children:Object(o.jsx)("i",{className:"bx bxl-github"})})]}),Object(o.jsx)("p",{children:"\xa9 2021 created by Khang Le"})]})},v=function(){return Object(c.useEffect)((function(){!function(){var e=Object(l.a)({origin:"top",distance:"80px",duration:600,reset:!0});e.reveal(".home__title",{}),e.reveal(".button",{delay:200}),e.reveal(".home__img",{delay:200}),e.reveal(".home__social-icon",{interval:200}),e.reveal(".about__img",{}),e.reveal(".about__subtitle",{}),e.reveal(".about__text",{}),e.reveal(".skills__subtitle",{}),e.reveal(".skills__text",{}),e.reveal(".skills__list",{}),e.reveal(".projects__list",{}),e.reveal(".work__list",{})}()}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"l-header",children:Object(o.jsx)(h,{})}),Object(o.jsxs)("main",{className:"l-main",children:[Object(o.jsx)(m,{}),Object(o.jsx)(u,{}),Object(o.jsx)(O,{}),Object(o.jsx)(g,{}),Object(o.jsx)(_,{})]}),Object(o.jsx)(p,{})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,a=s.getLCP,n=s.getTTFB;t(e),c(e),i(e),a(e),n(e)}))};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),k()}},[[12,1,2]]]);
//# sourceMappingURL=main.7bf7f51f.chunk.js.map
const humburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link'),
      menuOverlay = document.querySelector('.menu__overlay');

humburger.addEventListener('click', ()=>{
    menu.classList.add('active');
    document.addEventListener('keydown',(e)=>{
        if(e.key === 'Escape'){
            menu.classList.remove('active');
        }
    });
    close.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });
    menuOverlay.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });
    menuLink.forEach( item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});

// Change color Humburger and social links

const scrolChangeColor = function (selector){
    if(window.scrollY > window.innerHeight){
        selector.forEach(item => {
            item.style.background = 'black';
        });
    }else{
        selector.forEach(item => {
            item.style.background = 'white';
        });
    }
};

const hamburger = document.querySelectorAll('.hamburger span'),
      sidepanel = document.querySelector('.sidepanel__text span'),
      divider = document.querySelector('.sidepanel__divider'),
      black = document.querySelectorAll('.sidepanel__link svg'),      
      pageup = document.querySelector('.pageup');
      
window.addEventListener('scroll', ()=>{

    //scroll up
    if(window.scrollY > window.innerHeight){
        pageup.style.display = 'block';
    }else{
        pageup.style.display = 'none';
    }

    //scroll change color
    scrolChangeColor(hamburger);
    if(window.scrollY > window.innerHeight-376){
        sidepanel.style.color = 'black';
        divider.style.background = 'black';
        black.forEach(item => {
            item.classList.add('black')
          });        
    }else{
        sidepanel.style.color = 'white';
        divider.style.background = 'white';
        black.forEach(item => {
            item.classList.remove('black')
          });
    }
});

const langArr = {
    "menu-about": {
        "pl" : 'O mnie',
        "en" : 'About me',
        "ru" : 'ОБО МНЕ'
    },
    "menu-exp": {
        "pl" : 'Moje umiejętności',
        "en" : 'My skills',
        "ru" : 'Мои навыки'
    },
    "menu-portfolio": {
        "pl" : 'Moje prace',
        "en" : 'My works',
        "ru" : 'Мои работы'
    },
    "menu-contact": {
        "pl" : 'Kontakt',
        "en" : 'Contacts',
        "ru" : 'Контакты'
    },
    "myname": {
        "pl" : 'Nazywam się Yevhenii Ivanov',
        "en" : 'My name is Yevhenii Ivanov',
        "ru" : 'Меня зовут Евгений Иванов'
    },
    "developer" :{
        "pl" : "Jestem Front-End Developer <br/> z Częstochowy",
        "en" : "I am Front-End Developer <br> from Chenstohowa",
        "ru" : "Я web-разработчик <br> из города Ченстохова"
    },
    "portfolio" : {
        "pl" : 'Portfolio',
        "en" : 'Portfolio',
        "ru" : 'Портфолио'
    },
    "about" : {
        "pl" : 'O mnie',
        "en" : 'About me',
        "ru" : 'Обо мне'
    },
    "aboutme" : {
        "pl" : 'O mnie',
        "en" : 'About me',
        "ru" : 'Обо мне'
    },
    "about-text" : {
        "pl" : 'Mam pełne 34 lata. W 2004 ukończyłem gimnazjum, w 2013 zdobyłem kwalifikację bakaławra zarządzania oraz menadżera-administratora. Karierę zacząłem jako ładowacz, następnie pracowałem jako merchandiser. W krótkim czasie zostałem przedstawicielem handlowym i za swoje osiągnięcia w pracy zostałem awansowany na stanowisko szefa zespołu sprzedaży. Ze względu na obecną sytuację w Ukrainie zastanowiłem się nad przeprowadzką.<br><br>W 2017 przeniosłem się do Polski. Po dokładnym zrozumieniu siebie, swoich ambicji, wytrwałości i, chyba, najważniejszej rzeczy - zamiłowania do rozwiązywania problemów, postanowiłem zostać Front-End developerem. Ukończyłem kilka kursów HTML5, CSS3 i JavaScript na różnych platformach edukacyjnych, z których głównym jest UDEMY. Teraz aktywnie rozwijam swoje umiejętności i opanowuję bibliotekę React.<br><br>Dlatego mogę nazwać siebie samoukiem! Moim zdaniem to nie jest dobre, ale też nie jest złe. Nie jest to dobrze w tym sensie, że nie posiadam wymaganego dyplomu, który mógłby potwierdzić moją wiedzę. Ale jako lider, rekrutujący ludzi do zespołu, przede wszystkim, patrzyłem na to, jak potrafią pokonywać trudności, jak bardzo chcą się uczyć i dostać tą pracę. Jestem pewny, że ​​zobaczycie we mnie te wszystkie cechy i nie pożałujecie!!!',
        "en" : "I am 34 years old. In 2004 I graduated from gymnasium and in 2013 I received the Bachelor's degree in Management. I started my career as a loader, then I worked as a merchandiser. In a short time, I became a sales representative and, for my achievements at work, I was promoted to the head of the sales team. Due to the current situation in Ukraine, I was forced to change the field of activity and think about moving to Poland. <br><br> In 2017 my family and I moved to Poland. Having thoroughly understood myself, my ambitions, perseverance and, probably, the most important thing - love to solve problems, I decided to become a Front-End developer. I have taken several courses in HTML5, CSS3 and JavaScript on different learning platforms, the main one is UDEMY. Now I continue to develop my skills, especially, the React library. <br><br> Therefore, I can call myself a self-taught! To my mind, this is not good, but not bad either. It’s not good in the sense that I don’t have the required diploma that can confirm my knowledges. But as a leader that hired people, I, first of all, looked at the way they can overcome difficulties, at their desire to learn and their willingness to get this job. I am sure that you will see all those qualities in me and you will not regret it !!!",
        "ru" : 'Мне полных 34 года. В 2004 году закончил гимназию, в 2013 году получил степень бакалавра в направлении "Менеджмент". Свою карьеру начинал с грузчика, затем работал мерчендайзером. За короткое время стал торговым представителем и за достижения в работе был поставлен руководителем торговой команды. Из-за сложившейся ситуации в Украине был вынужден менять сферу деятельности и задуматься о переезде.<br><br>В 2017 году переехал в Польшу. Тщательно разобравшись в себе, в своих амбициях, настойчивости и, наверное, самое главное - к любви решать проблемы, решил стать Front-End разработчиком. Я прошел не один курс по HTML5, CSS3 и JavaScript на разных учебных платформах, основной из которых была UDEMY. Сейчас активно продолжаю развиваться и осваивать библиотеку React. <br><br>Поэтому я могу назвать себя самоучкой! По моему мнению, это не хорошо, но и не плохо. Не хорошо в том плане, что у меня нет нужного диплома, который бы мог подтвердить мои знания. Но будучи руководителем и набирая людей в команду, я, в первую очередь, смотрел на то, как они умеют преодолевать сложности, насколько они готовы обучаться и как сильно хотят получить эту работу. Я уверен, что все те качества вы увидете во мне и не пожалеете!!!'
    },
    "name" : {
        "pl" : 'Mam na imię Yevhenii ',
        "en" : 'My name is Yevhenii',
        "ru" : 'Меня зовут Евгений'
    },
    "experience" : {
        "pl" : 'Doświadczenie',
        "en" : 'Experience',
        "ru" : 'Опыт'
    },
    "be-useful" : {
        "pl" : 'Jak będę przydatny',
        "en" : 'How will be useful',
        "ru" : 'Чем я буду полезен'
    },
    "education" : {
        "pl" : 'Wykształcenie',
        "en" : 'Education',
        "ru" : 'Образование'
    },
    "gimnasium" : {
        "pl" : 'Gimnazjum №31 w m.Czerkasy',
        "en" : 'Cherkasy Gymnasium №31',
        "ru" : 'Черкасская Гимназия №31'
    },
    "univercity" : {
        "pl" : 'Czerkaski Państwowy Uniwersytet Technologiczny',
        "en" : 'Cherkasy State Technological<br> University',
        "ru" : 'Черкасский Государственный Технологический Университет'
    },
    "univercity-diplom" : {
        "pl" : 'Dyplom bakaławra | Czerkasy (2008-2013)<br>Kierunek "Zarządzanie"',
        "en" : "Bachelor's degree | Cherkasy (2008-2013)<br>Faculty of Management",
        "ru" : 'Диплом бакалавра | Черкассы (2008-2013)<br>Факультет экономики и управления "Менеджмент"'
    },
    "course" : {
        "pl" : 'Kursy tworzenia stron internetowych',
        "en" : 'Web Development Courses',
        "ru" : 'Курсы по Web-разработке'
    },
    "course-like" : {
        "pl" : 'Web Developer 2021 (HTML5, CSS3)<br>Intensyw z JavaScript<br>Kompletny kurs JavaScript i React — od podstaw do rezultatu<br>Praktyczny JavaScript',
        "en" : 'Web Developer 2021 (HTML5, CSS3)<br>JavaScript intensive<br>The Complete JavaScript and React Course - from scratch to result<br>Practical JavaScript',
        "ru" : 'Web-разработчик 2021 (HTML5, CSS3)<br>Интенсивное погружение в JavaScript<br>Полный курс по JavaScript и React - с нуля до результата<br>Практический JavaScript'
    },
    "work-experience" : {
        "pl" : 'Doświadczenie zawodowe',
        "en" : 'Work experience',
        "ru" : 'Опыт работы'
    },
    "first" : {
        "pl" : 'Od pracownika magazynu do merczendajzera',
        "en" : 'From carrier to merchandiser',
        "ru" : 'От грузчика до мерчендайзера'
    },
    "sale" : {
        "pl" : 'Przedstawiciel handlowy',
        "en" : 'Sales Manager',
        "ru" : 'Торговый представитель'
    },
    "sale-comp" : {
        "pl" : '"Privat Trejd" (2006-2008)',
        "en" : '"Privat Trade" (2006-2008)',
        "ru" : '"Приват трейд" (2006-2008)'
    }, 
    "sale-n" : {
        "pl" : 'Przedstawiciel handlowy',
        "en" : 'Sales Manager',
        "ru" : 'Торговый представитель'
    },
    "sale-n-comp" : {
        "pl" : '"Newton" (2008-2011)',
        "en" : '"Newton" (2008-2011)',
        "ru" : '"Newton" (2008-2011)'
    }, 
    "sale-n-comp-for" : {
        "pl" : 'Awansował za najlepszą reprezentację na powierzonym terenie i pierwsze miejsce w konkursie wśród przedstawicieli handlowych.',
        "en" : 'For the best representation in the entrusted territory and the first place in the competition among sales representatives, was promoted.',
        "ru" : 'За лучшую представленость на ввереной территории и первое место в соревнованиях среди торговый представителей, получил повышение в должности.'
    }, 
    "director" : {
        "pl" : 'Kierownik zespołu sprzedaży',
        "en" : 'Head of the sales team',
        "ru" : 'Руководитель торговой команды'
    }, 
    "operator" : {
        "pl" : 'Operator linii produkcyjnej szkła zespolonego',
        "en" : 'Machine operator at production of glass',
        "ru" : 'Оператор линии по изготовлению стеклопакетов'
    }, 
    "skills" : {
        "pl" : 'Umiejętności',
        "en" : 'Skills',
        "ru" : 'Навыки'
    }, 
    "use" : {
        "pl" : 'Czego używam w swojej pracy',
        "en" : 'What do I use in my work',
        "ru" : 'Что я использую в работе'
    }, 
    "window" : {
        "pl" : 'Biblioteka JavaScript do tworzenia interfejsów użytkownika. Opracowany przez Facebook, Instagram oraz społeczność indywidualnych programistów.',
        "en" : 'JavaScript library for creating user interfaces. Developed by Facebook, Instagram and the community of individual developers.',
        "ru" : ' Библиотека JavaScript для создания пользовательских интерфейсов. Разрабатывается Facebook , Instagram и сообществом индивидуальных разработчиков.'
    }, 
    "visual" : {
        "pl" : 'Lekki edytor kodu do wieloplatformowego tworzenia aplikacji internetowych i chmurowych.',
        "en" : 'Lightweight code editor for cross-platform web and cloud application development.',
        "ru" : 'Лёгкий редактор кода для кроссплатформенной разработки веб- и облачных приложений.'
    }, 
    "html" : {
        "pl" : 'To on tworzy szkielet Twojej strony lub aplikacji, a piąta wersja pozwoli ci stworzyć bardziej zoptymalizowaną pod kątem SEO strukturę Twojego produktu.',
        "en" : 'It creates the skeleton of your site or application, and the fifth version will allow you to create a more SEO-optimized structure of your product.',
        "ru" : 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.'
    }, 
    "css" : {
        "pl" : 'Ten język stylów pozwala сi stworzyć absolutnie dowolny wygląd Twojej witryny lub aplikacji. Wszystko ogranicza tylko Twoja wyobraźnia!',
        "en" : 'This style language allows you to create absolutely any look and feel for your site or application. Everything is limited only by your imagination!',
        "ru" : 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!'
    }, 
    "js" : {
        "pl" : 'Ten język programowania pozwala ożywić wszystko: suwaki, okna, podpowiedzi, zakładki, pobieranie danych z serwera i wiele więcej.',
        "en" : 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server and much more.',
        "ru" : 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.'
    }, 
    "jquery" : {
        "pl" : 'Biblioteka Jquery przyspieszy rozwój, zawiera funkcjonalność przydatną dla jak najszerszego zakresu zadań.',
        "en" : 'The Jquery library will speed up development, it contains functionality that is useful for the widest possible range of tasks.',
        "ru" : 'Библиотека Jquery позволит ускорить разработку, она содержит функциональность, полезную для максимально широкого круга задач.'
    },  
    "git" : {
        "pl" : 'Zestaw narzędzi zawierający szablony CSS i HTML do typografii, formularzy, przycisków, nawigacji i innych elementów interfejsu.',
        "en" : 'A set of tools containing CSS and HTML templates for typography, forms, buttons, navigation and other interface components.',
        "ru" : 'Набор инструментов содержащий шаблоны CSS и HTML для типографии, форм, кнопок, навигации и других компонентов интерфейса.'
    }, 
    "github" : {
        "pl" : 'Serwis internetowy do hostingu projektów informatycznych i ich wspólnego opracowywania.',
        "en" : 'Web service for hosting IT projects and their joint development.',
        "ru" : 'Веб-сервис для хостинга IT-проектов и их совместной разработки.'
    }, 
    "webpack" : {
        "pl" : 'Jest to kolektor modułów dla nowoczesnych aplikacji JavaScript, HTML, CSS.',
        "en" : 'It is a module wrapper for modern JavaScript, HTML, CSS applications.',
        "ru" : 'Это упаковщик модулей для современных приложений JavaScript, HTML, CSS.'
    }, 
    "gulp" : {
        "pl" : 'Menedżer zadań do automatycznego wykonywania zadań, napisany w języku programowania JavaScript.',
        "en" : 'A task manager for the automatic execution of tasks, written in the JavaScript programming language.',
        "ru" : 'Таск-менеджер для автоматического выполнения задач, написанный на языке программирования JavaScript. '
    }, 
    "portfolio-work" : {
        "pl" : 'Portfolio',
        "en" : 'Portfolio',
        "ru" : 'Портфолио'
    }, 
    "my-work" : {
        "pl" : 'Moje prace',
        "en" : 'My work',
        "ru" : 'Мои работы'
    }, 
    "cont" : {
        "pl" : 'Kontakt',
        "en" : 'Contacts',
        "ru" : 'Контакты'
    }, 
    "call" : {
        "pl" : 'Skontaktuj się ze mną',
        "en" : 'Contact me',
        "ru" : 'Свяжитесь со мной'
    }, 
    "like" : {
        "pl" : 'W dowolny dogodny dla Ciebie sposób:',
        "en" : 'In any way convenient for you:',
        "ru" : 'Любым удобным для вас способом:'
    }, 
    "or" : {
        "pl" : 'Lub zostaw swoje dane, a ja jak najszybszej skontaktuję sie z Tobą:',
        "en" : 'Or leave your message and I will contact you as soon as possible:',
        "ru" : 'Или оставьте ваши данные и я сам вам напишу:'
    }, 
    "innername" : {
        "pl" : 'Twoje imię',
        "en" : 'Your name',
        "ru" : 'Ваше имя'
    }, 
    "inneremail" : {
        "pl" : 'Twoja poczta',
        "en" : 'Your email',
        "ru" : 'Ваша почта'
    }, 
    "innermess" : {
        "pl" : 'Twoja wiadomość',
        "en" : 'Your message',
        "ru" : 'Ваше сообщение'
    }, 
    "btn" : {
        "pl" : 'Wysłać wiadomość',
        "en" : 'Send a message',
        "ru" : 'Отправить сообщение'
    }, 
    "agre" : {
        "pl" : 'Zgadzam się na przetwarzanie moich danych osobowych.',
        "en" : 'I agree with the processing my personal data.',
        "ru" : 'Я согласен(а) на обработку моих персональных данных.'
    }
};
const select = document.querySelector('select');

function changeLang (){    
    let languege = select.value;
    for(let key in langArr){
        let elem = document.querySelector('.lang-' + key);
        if(elem){
            elem.innerHTML = langArr[key][languege];
        }
    }
}

changeLang();

select.addEventListener('change', changeLang);

// send messenger

const contactForm = document.querySelector('.contact__form'),
      modal = document.querySelector('.modal'),
      mini = document.querySelector('.modal__bg'),
      miniText = document.querySelector('.modal__mini'),
      modalSpinner = document.querySelector('.modal__spinner'),
      messege = {
          load: 'img/form/spinner.svg',
          success: {
              pl: 'Dziękuję <br> Za niedługo skontaktuje sie z tobą.',
              en: 'Thank you <br> I wiil be contact with you soon.',
              ru: 'Спасибо!<br>Я скоро с Вами свяжусь.!!!'

          },
          error: {
              pl: 'Coś poszło nie tak!!!',
              en: 'Something went wrong!!!',
              ru: 'Что то пошло не так!!!'
          }
      };

      contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        modal.style.display = 'block';
        modalSpinner.style.display = 'block';
    
        const request = new XMLHttpRequest();
        request.open("POST", 'mailer/smart.php');
    
        const formData = new FormData(contactForm);
    
        request.send(formData);
    
        request.addEventListener('load', ()=>{
            if(request.status === 200){
                modalSpinner.style.display = 'none';
                mini.style.display = 'block';
                miniText.innerHTML = messege.success[select.value];
                setTimeout(function(){
                    modal.style.display = 'none';
                }, 3000);
                contactForm.reset();
            }else{
                modal.style.display = 'block';
                miniText.innerHTML = messege.error[select.value];
                setTimeout(function(){
                    modal.style.display = 'none';
                }, 3000);
            }
        });
    });




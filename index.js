   var initDot = document.getElementById("loading");
   var loading = setInterval(function() {
       let time = 0;
       if(initDot.innerHTML.length === 5) {
           initDot.innerHTML = ""
           time++;
       } else {
           if(initDot.innerHTML === "_"){
               initDot.innerHTML = "";
           }else {
               initDot.innerHTML += "_";
           }
           time++;
       }
   }, 350); // Dot Speed

   var $loadingMessage = $('#loadingH1');
    
   setTimeout(function() {
         clearInterval(loading);
         $loadingMessage.hide();
      }, 1250);
   
   var initProgram = setTimeout(function(){
       var greeting = "Bienvenue";
       var test = 'test';
       var message = "Execution du fichier d'information sur le sujet 25";
       var $identityDiv = $("#identity-results");
       var $name = "NOM DU SUJET: PINEAU MAEL";
       var $alias = "AGE: 19"
       var $occupation  = "FORMATION: DEVELOPPEUR FULL STACK";
       var $studies = "ETUDES DU SUJET";
       var $btsName = "BTS SERVICES INFORMATIQUES AUX ORGANISATIONS";
       var $btsPlace = "LYCEE GOEDFROY DE BOUILLONT - CLERMONT FERRAND";
       var $btsDate = "2020 - 2022";
       var $bacName = "BAC STI2D";
       var $bacPlace = "LYCEE LAFAYETTE - CLERMONT FERRAND";
       var $bacDate = "2017 - 2020"
       var $web  ="WEB DEVELLOPEMENT :";
       var $webLanguage = "HTML | CSS | JAVASCRIPT | PHP | SQL";
       var $CSSFrameworks = "CSS FRAMEWORKS: BOOTSTRAP";
       var $CSSPre = "CSS PREPROCESSORS: SASS";
       var $JSLibs = "JAVASCRIPT LIBRARIES: JQUERY";
       var $frontEndAnimation = "FRONT END ANIMATION: CANVAS | HTML5 | SVG";
       var $PHPFrameworks = "PHP FRAMEWORKS: SYMPHONY";
       var $desktop  ="DESKTOP DEVELLOPEMENT :";
       var $desktopLanguage = "JAVA | PYTHON | SQLITE";
       var $mobile  ="MOBILE DEVELLOPEMENT :";
       var $mobileLanguage = "JAVA ANDROID | SQLITE";
       var $experience  ="EXPERIENCE :";
       var $experienceInternship1  ="STAGE D'ETUDE 1ERE ANNEE BTS";
       var $experienceInternship1Company  ="CNEXT CONSULTING";
       var $experienceInternship1Year = "2021 | 2 MOIS";
       var $experience1= "------------------"
       var $experienceInternship2  ="STAGE D'ETUDE 2EME ANNEE BTS";
       var $experienceInternship2Company  ="CERFOS";
       var $experienceInternship2Year = "2022 | 2 MOIS";
       var $experienceBlockRelease  ="ALTERNANCE LORS D'UNE LICENSE INFORMATIQUE";
       var $experienceBlockReleaseCompany  ="CERFOS";
       var $experienceBlockReleaseYear = "2022 - 2023 | 1 ANS";


       function initIdentityResults(i) {
            $("#message").addClass("sign cursor").text(message.substring(0, i));
            if (i < message.length) {
                setTimeout(function () {
                    initIdentityResults(i + 1);
                }, 35);
            } else {
                $('#message').removeClass("cursor");
                var loadingResume = function () {
                    $("#loadingMessage2").show()
                    var dotAlpha = document.getElementById("alpha-loading");
                    var loadingAlpha = setInterval(function () {
                        if (dotAlpha.innerHTML.length == 6) {
                            dotAlpha.innerHTML = "";
                        } else {
                            dotAlpha.innerHTML += ".";
                            setTimeout(function () {
                                clearInterval(loadingAlpha);
                                $("#loadingMessage2").hide();
                            }, 2000);
                        }
                    }, 350);  // Dot Speed
                }
                loadingResume();

                function initName(i) {
                    $("#name").addClass("sign cursor").text($name.substring(0, i));
                    if (i < $name.length) {
                        setTimeout(function () {
                            initName(i + 1);
                        }, 35);
                    } else {
                        $("#name").removeClass("cursor");
                        setTimeout(function () {
                            initAlias(0);
                        }, 1500);
                    }
                }

                setTimeout(function () {
                    initName(0);
                }, 2500);
            }

            function initAlias(i) {
                $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                if (i < $alias.length) {
                    setTimeout(function () {
                        initAlias(i + 1);
                    }, 35);
                } else {
                    $("#alias").removeClass("cursor");
                    setTimeout(function () {
                        initOccupation(0);
                    }, 1500);
                }
            }

            function initOccupation(i) {
                $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                if (i < $occupation.length) {
                    setTimeout(function () {
                        initOccupation(i + 1);
                    }, 35);
                } else {
                    $("#occupation").removeClass("cursor");
                    setTimeout(function () {
                        initStudies(0);
                    }, 1500);
                }
            }

            function initStudies(i) {
                $('#studies-span').addClass('fa fa-wrench');
                $('#studies').addClass("cursor").text($studies.substring(0, i));
                if (i < $studies.length) {
                    setTimeout(function () {
                        initStudies(i + 1);
                    }, 35);
                } else {
                    $('#studies').removeClass("cursor");
                    setTimeout(function () {
                        initBacName(0);
                    }, 1500);
                }
            }

           function initBacName(i) {
               $('#bac-name').addClass("sign cursor").text($bacName.substring(0, i));
               if (i < $bacName.length) {
                   setTimeout(function () {
                       initBacName(i + 1);
                   }, 35);
               } else {
                   $('#bac-name').removeClass("cursor");
                   setTimeout(function () {
                       initBacPlace(0);
                   }, 1500);
               }
           }

           function initBacPlace(i) {
               $('#bac-place').addClass("sign cursor").text($bacPlace.substring(0, i));
               if (i < $bacPlace.length) {
                   setTimeout(function () {
                       initBacPlace(i + 1);
                   }, 35);
               } else {
                   $('#bac-place').removeClass("cursor");
                   setTimeout(function () {
                       initBacDate(0);
                   }, 1500);
               }
           }

           function initBacDate(i) {
               $('#bac-date').addClass("sign cursor").text($bacDate.substring(0, i));
               if (i < $bacDate.length) {
                   setTimeout(function () {
                       initBacDate(i + 1);
                   }, 35);
               } else {
                   $('#bac-date').removeClass("cursor");
                   setTimeout(function () {
                       initBtsName(0);
                   }, 1500);
               }
           }

            function initBtsName(i) {
                $('#bts-name').addClass("sign cursor").text($btsName.substring(0, i));
                if (i < $btsName.length) {
                    setTimeout(function () {
                        initBtsName(i + 1);
                    }, 35);
                } else {
                    $('#bts-name').removeClass("cursor");
                    setTimeout(function () {
                        initBtsPlace(0);
                    }, 1500);
                }
            }

            function initBtsPlace(i) {
                $('#bts-place').addClass("sign cursor").text($btsPlace.substring(0, i));
                if (i < $btsPlace.length) {
                    setTimeout(function () {
                        initBtsPlace(i + 1);
                    }, 35);
                } else {
                    $('#bts-place').removeClass("cursor");
                    setTimeout(function () {
                        initBtsDate(0);
                    }, 1500);
                }
            }

            function initBtsDate(i) {
                $('#bts-date').addClass("sign cursor").text($btsDate.substring(0, i));
                if (i < $btsDate.length) {
                    setTimeout(function () {
                        initBtsDate(i + 1);
                    }, 35);
                } else {
                    $('#bts-date').removeClass("cursor");
                    setTimeout(function () {
                        initWeb(0);
                    }, 1500);
                }
            }


            function initWeb(i) {
                window.location ="index.html#web";
                $('#web-span').addClass('fa fa-wrench');
                $('#web').addClass("cursor").text($web.substring(0, i));
                if (i < $web.length) {
                    setTimeout(function () {
                        initWeb(i + 1);
                    }, 35);
                } else {
                    $('#web').removeClass("cursor");
                    setTimeout(function () {
                        initWebLanguage(0);
                    }, 1500);
                }
            }

            function initWebLanguage(i) {
                window.location ="index.html#web-language";
               $('#web-language').addClass("sign cursor").text($webLanguage.substring(0, i));
               if (i < $webLanguage.length) {
                   setTimeout(function () {
                       initWebLanguage(i + 1);
                   }, 35);
               } else {
                   $('#web-language').removeClass("cursor");
                   setTimeout(function () {
                       initCSSFrameworks(0);
                   }, 1500);
               }
           }

            function initCSSFrameworks(i) {
                window.location ="index.html#css-frameworks";
               $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
               if (i < $CSSFrameworks.length) {
                   setTimeout(function () {
                       initCSSFrameworks(i + 1);
                   }, 35);
               } else {
                   $('#css-frameworks').removeClass("cursor");
                   setTimeout(function () {
                       initCSSPre(0);
                   }, 1500);
               }
           }

            function initCSSPre(i) {
                window.location ="index.html#css-pre";
               $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
               if (i < $CSSPre.length) {
                   setTimeout(function () {
                       initCSSPre(i + 1);
                   }, 35);
               } else {
                   $('#css-pre').removeClass("cursor");
                   setTimeout(function () {
                       initJSLibs(0);
                   }, 1500);
               }
           }

            function initJSLibs(i) {
                window.location ="index.html#js-libs";
                $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
                if (i < $JSLibs.length) {
                    setTimeout(function () {
                        initJSLibs(i + 1);
                    }, 35);
                } else {
                    $('#js-libs').removeClass("cursor");
                    setTimeout(function () {
                        initFrontEndAnimation(0);
                    }, 1500);
                }
            }

            function initFrontEndAnimation(i) {
                window.location ="index.html#front-end-animation";
                $('#front-end-animation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
                if (i < $frontEndAnimation.length) {
                    setTimeout(function () {
                        initFrontEndAnimation(i + 1);
                    }, 35);
                } else {
                    $('#front-end-animation').removeClass("cursor");
                    setTimeout(function () {
                        initPHPFrameworks(0);
                    }, 1500);
                }
            }

            function initPHPFrameworks(i) {
                window.location ="index.html#php-frameworks";
                $('#php-frameworks').addClass("sign cursor").text($PHPFrameworks.substring(0, i));
                if (i < $PHPFrameworks.length) {
                   setTimeout(function () {
                       initPHPFrameworks(i + 1);
                   }, 35);
               } else {
                   $('#php-frameworks').removeClass("cursor");
                   setTimeout(function () {
                       initDesktop(0);
                   }, 1500);
               }
           }

           function initDesktop(i) {
               window.location ="index.html#desktop";
               $('#desktop-span').addClass('fa fa-wrench');
               $('#desktop').addClass("cursor").text($desktop.substring(0, i));
               if (i < $desktop.length) {
                   setTimeout(function () {
                       initDesktop(i + 1);
                   }, 35);
               } else {
                   $('#desktop').removeClass("cursor");
                   setTimeout(function () {
                       initDestockLanguage(0);

                   }, 1500);
               }
           }

           function initDestockLanguage(i) {
               window.location ="index.html#desktop-language";
               $('#desktop-language').addClass("sign cursor").text($desktopLanguage.substring(0, i));
               if (i < $desktopLanguage.length) {
                   setTimeout(function () {
                       initDestockLanguage(i + 1);
                   }, 35);
               } else {
                   $('#desktop-language').removeClass("cursor");
                   setTimeout(function () {
                       initMobile(0);
                   }, 1500);
               }
           }

           function initMobile(i) {
               window.location ="index.html#mobile";
               $('#mobile-span').addClass('fa fa-wrench');
               $('#mobile').addClass("cursor").text($mobile.substring(0, i));
               if (i < $mobile.length) {
                   setTimeout(function () {
                       initMobile(i + 1);
                   }, 35);
               } else {
                   $('#mobile').removeClass("cursor");
                   setTimeout(function () {
                       initMobileLanguage(0);
                   }, 1500);
               }
           }

           function initMobileLanguage(i) {
               window.location ="index.html#mobile-language";
               $('#mobile-language').addClass("sign cursor").text($mobileLanguage.substring(0, i));
               if (i < $mobileLanguage.length) {
                   setTimeout(function () {
                       initMobileLanguage(i + 1);
                   }, 35);
               } else {
                   $('#mobile-language').removeClass("cursor");
                   setTimeout(function () {
                       initExperience(0);
                   }, 1500);
               }
           }
           function initExperience(i) {
               window.location ="index.html#experience";
               $('#experience-span').addClass('fa fa-wrench');
               $('#experience').addClass("cursor").text($experience.substring(0, i));
               if (i < $experience.length) {
                   setTimeout(function () {
                       initExperience(i + 1);
                   }, 35);
               } else {
                   $('#experience').removeClass("cursor");
                   setTimeout(function () {
                       initInternship1(0);
                   }, 1500);
               }
           }
           function initInternship1(i) {
               window.location ="index.html#experience-internship-1";
               $('#experience-internship-1').addClass("sign cursor").text($experienceInternship1.substring(0, i));
               if (i < $experienceInternship1.length) {
                   setTimeout(function () {
                       initInternship1(i + 1);
                   }, 35);
               } else {
                   $('#experience-internship-1').removeClass("cursor");
                   setTimeout(function () {
                       initInternship1Company(0);
                   }, 1500);
               }
           }
           function initInternship1Company(i) {
               window.location ="index.html#experience-internship-1-company";
               $('#experience-internship-1-company').addClass("sign cursor").text($experienceInternship1Company.substring(0, i));
               if (i < $experienceInternship1Company.length) {
                   setTimeout(function () {
                       initInternship1Company(i + 1);
                   }, 35);
               } else {
                   $('#experience-internship-1-company').removeClass("cursor");
                   setTimeout(function () {
                       initInternship1Year(0);
                   }, 1500);
               }
           }
           function initInternship1Year(i) {
               window.location ="index.html#experience-internship-1-year";
               $('#experience-internship-1-year').addClass("sign cursor").text($experienceInternship1Year.substring(0, i));
               if (i < $experienceInternship1Year.length) {
                   setTimeout(function () {
                       initInternship1Year(i + 1);
                   }, 35);
               } else {
                   $('#experience-internship-1-year').removeClass("cursor");
                   setTimeout(function () {
                       initExperience1(0);
                   }, 1500);
               }
           }

           function initExperience1(i) {
               window.location ="index.html#experience-1";
               $('#experience-1').addClass("sign cursor").text($experience1.substring(0, i));
               if (i < $experience1.length) {
                   setTimeout(function () {
                       initExperience1(i + 1);
                   }, 35);
               } else {
                   $('#experience-1').removeClass("cursor");
                   setTimeout(function () {
                       initInternship2(0);
                   }, 1500);
               }
           }

           function initInternship2(i) {
               window.location ="index.html#experience-internship-2";
               $('#experience-internship-2').addClass("sign cursor").text($experienceInternship2.substring(0, i));
               if (i < $experienceInternship2.length) {
                   setTimeout(function () {
                       initInternship2(i + 1);
                   }, 35);
               } else {
                   $('#experience-internship-2').removeClass("cursor");
                   setTimeout(function () {
                       initInternship2Company(0);
                   }, 1500);
               }
           }
           function initInternship2Company(i) {
               window.location ="index.html#experience-internship-2-company";
               $('#experience-internship-2-company').addClass("sign cursor").text($experienceInternship2Company.substring(0, i));
               if (i < $experienceInternship2Company.length) {
                   setTimeout(function () {
                       initInternship2Company(i + 1);
                   }, 35);
               } else {
                   $('#experience-internship-2-company').removeClass("cursor");
                   setTimeout(function () {
                       initInternship2Year(0);
                   }, 1500);
               }
           }
           function initInternship2Year(i) {
               window.location ="index.html#experience-internship-2-year";
               $('#experience-internship-2-year').addClass("sign cursor").text($experienceInternship2Year.substring(0, i));
               if (i < $experienceInternship2Year.length) {
                   setTimeout(function () {
                       initInternship2Year(i + 1);
                   }, 35);
               } else {
                   $('#experience-internship-2-year').removeClass("cursor");
                   setTimeout(function () {
                       initExperience2(0);
                   }, 1500);
               }
           }

           function initExperience2(i) {
               window.location ="index.html#experience-2";
               $('#experience-2').addClass("sign cursor").text($experience1.substring(0, i));
               if (i < $experience1.length) {
                   setTimeout(function () {
                       initExperience2(i + 1);
                   }, 35);
               } else {
                   $('#experience-2').removeClass("cursor");
                   setTimeout(function () {
                       initBlockRelease(0);
                   }, 1500);
               }
           }



           function initBlockRelease(i) {
               window.location ="index.html#experience-block-release";
               $('#experience-block-release').addClass("sign cursor").text($experienceBlockRelease.substring(0, i));
               if (i < $experienceBlockRelease.length) {
                   setTimeout(function () {
                       initBlockRelease(i + 1);
                   }, 35);
               } else {
                   $('#experience-block-release').removeClass("cursor");
                   setTimeout(function () {
                       initBlockReleaseCompany(0);
                   }, 1500);
               }
           }
           function initBlockReleaseCompany(i) {
               window.location ="index.html#experience-stage-2-company";
               $('#experience-block-release-company').addClass("sign cursor").text($experienceBlockReleaseCompany.substring(0, i));
               if (i < $experienceBlockReleaseCompany.length) {
                   setTimeout(function () {
                       initBlockReleaseCompany(i + 1);
                   }, 35);
               } else {
                   $('#experience-block-release-company').removeClass("cursor");
                   setTimeout(function () {
                       initBlockReleaseYear(0);
                   }, 1500);
               }
           }
           function initBlockReleaseYear(i) {
               window.location ="index.html#experience-block-release-year";
               $('#experience-block-release-year').addClass("sign cursor").text($experienceBlockReleaseYear.substring(0, i));
               if (i < $experienceBlockReleaseYear.length) {
                   setTimeout(function () {
                       initBlockReleaseYear(i + 1);
                   }, 35);
               } else {
                   $('#experience-block-release-year').removeClass("cursor");
                   setTimeout(function () {
                   }, 1500);
               }
           }
        }




         
      function initProgramAlpha(i){
          $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 35);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, 1500);

initProgram()



/* MENU BURGER */
function sous_menu() {
    var sous_menu = document.getElementById('sous_menu');
    var btn_plus = document.getElementById('btn_plus')
    var btn_moins = document.getElementById('btn_moins')

    if (sous_menu.style.display == 'none' ||  sous_menu.style.display == '') {
                sous_menu.style.display = 'block';
                btn_plus.style.display = 'none';
                btn_moins.style.display = 'block';
            }
    else {
                sous_menu.style.display = 'none';
                btn_plus.style.display = 'block';
                btn_moins.style.display = 'none';
            }
        }

/* VALIDATION DU FORMULAIRE */
function desactivation_infos_bulles() {
        
            var spans = document.getElementsByTagName('span'),
            spansLength = spans.length;
            
            for (var i = 0 ; i < spansLength ; i++) {
                if (spans[i].className == 'infosBulle') {
                    spans[i].style.display = 'none';
                }
            }
        }
        function getInfosBulles(elements) {
            
            while (elements = elements.nextSibling) {
                if (elements.className === 'infosBulle') {
                    return elements;
                }
            }   
            return false;
        }

        var check = {};

        check['nom'] = function(id) {
            var nom = document.getElementById(id),
                infosBullesStyle = getInfosBulles(nom).style;
            
            if (nom.value.length >= 2) {
                nom.className = 'correct';
                infosBullesStyle.display = 'none';
                return true;
            } else {
                nom.className = 'incorrect';
                infosBullesStyle.display = 'inline-block';
                return false;
            }
        };

        check['email'] = check['nom']; 
        check['message'] = check['nom']; 
        
        (function() {
            var contact = document.getElementById('contact'),
                inputs = document.getElementsByTagName('input'),
                inputsLength = inputs.length;
            
            for (var i = 0 ; i < inputsLength ; i++) {
                if (inputs[i].type == 'text' || inputs[i].type == 'password') {
        
                    inputs[i].addEventListener('keyup', function(e) {
                        check[e.target.id](e.target.id); 
                    }, false);
                }
            }
            contact.addEventListener('submit', function(e) {
        
                var result = true;
                for (var i in check) {
                    result = check[i](i) && result;
                }
                //document.location.href="index.html";
                e.preventDefault();
        
            }, false);
            
        })();       
        desactivation_infos_bulles();
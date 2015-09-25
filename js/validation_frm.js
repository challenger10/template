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
            var name = document.getElementById(id),
                infosBullesStyle = getInfosBulles(name).style;
            
            if (name.value.length >= 2) {
                name.className = 'correct';
                infosBullesStyle.display = 'none';
                return true;
            } else {
                name.className = 'incorrect';
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
        
                if (result) {
                    alert('Le formulaire est bien rempli.');
                }
                e.preventDefault();
        
            }, false);
            
        })();       
        desactivation_infos_bulles();
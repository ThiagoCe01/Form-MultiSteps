
var currentStep = 1;
      var totalSteps = 6;
      function nextStep() {
          if (currentStep < totalSteps) {
              var currentSection = document.getElementById("step" + currentStep);
              currentSection.style.display = "none";
              currentStep++;
              var nextSection = document.getElementById("step" + currentStep);
              nextSection.style.display = "block";
          }
      }
      function previousStep() {
          if (currentStep > 1) {
              var currentSection = document.getElementById("step" + currentStep);
              currentSection.style.display = "none";
              currentStep--;
              var previousSection = document.getElementById("step" + currentStep);
              previousSection.style.display = "block";
          }
      }
      function submitForm() {
          // Lógica para enviar o formulário
          document.getElementById("myForm").submit();
      }
      var labelconjunge = document.getElementById("conjuge");
      var labelmatrimonio = document.getElementById("matrimonio");
      function mostrarConjuge (labelconjunge){
        if (labelconjunge.target.value === 'casado') {
          document.getElementById("conjuge").style.display = "block";
          document.getElementById("matrimonio").style.display = "block";
        } else {
          document.getElementById("conjuge").style.display = "none";
          document.getElementById("matrimonio").style.display = "none";

        }
      }
      var qtdFilhos = document.getElementById("numfilhos");
      function mostrarfilhos(qtdFilhos){
        if(qtdFilhos.target.value === 'sim'){
          document.getElementById("numfilhos").style.display = "block";
        }else{
          document.getElementById("numfilhos").style.display = "none";
        }

      }
      var qtdFilhos = document.getElementById("numfilhos");
      function mostrarfilhos(qtdFilhos){
        if(qtdFilhos.target.value === 'sim'){
          document.getElementById("numfilhos").style.display = "block";
        }else{
          document.getElementById("numfilhos").style.display = "none";
        }

      }
      var filhoum = document.getElementById('filho1');
      var filhodois = document.getElementById('filho2');
      var filhotres = document.getElementById('filho3');
      var filhoquatro = document.getElementById('filho4');
      var historicoFilhos = document.getElementById('inforFilhos');
      function validarfilhos(historicoFilhos){
        if(historicoFilhos.target.value === '1'){
          document.getElementById("histFilhos").style.display = "block";
          document.getElementById("filho1").style.display = "flex";
          document.getElementById("filho2").style.display = "none";
          document.getElementById("filho3").style.display = "none";
          document.getElementById("filho4").style.display = "none";
         
         
        }else if(historicoFilhos.target.value ==='2'){
          document.getElementById("histFilhos").style.display = "block";
          document.getElementById("filho1").style.display = "flex";
          document.getElementById("filho2").style.display = "flex";
          document.getElementById("filho3").style.display = "none";
          document.getElementById("filho4").style.display = "none";
        }
        else if(historicoFilhos.target.value ==='3'){
          document.getElementById("histFilhos").style.display = "block";
          document.getElementById("filho1").style.display = "flex";
          document.getElementById("filho2").style.display = "flex";
          document.getElementById("filho3").style.display = "flex";
          document.getElementById("filho4").style.display = "none";
        } 
        else if(historicoFilhos.target.value ==='4'){
          document.getElementById("histFilhos").style.display = "block";
          document.getElementById("filho1").style.display = "flex";
          document.getElementById("filho2").style.display = "flex";
          document.getElementById("filho3").style.display = "flex";
          document.getElementById("filho4").style.display = "flex";
        } 
        else{
          document.getElementById("histFilhos").style.display = "none";
          document.getElementById("filho1").style.display = "none";
          document.getElementById("filho3").style.display = "none";
          document.getElementById("filho4").style.display = "none";
          document.getElementById("filho2").style.display = "none";
        }
      }

      var justificativaresp = document.getElementById("justificativa");
      function conjugemembro(justificativaresp){
        if(justificativaresp.target.value === 'nao'){
          document.getElementById("justificativa").style.display = "block";
        }else{
          document.getElementById("justificativa").style.display = "none";
        }

      }

      
      
     
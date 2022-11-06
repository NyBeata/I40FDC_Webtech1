function loadPackPage(){
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('dlcName').innerHTML = urlParams.get('dlc') + ' Pack';

    $.ajax({
        url:'animals/habitat.txt',
        success: function (data){
          //parse your data here
          //you can split into lines using data.split('\n') 
          //an use regex functions to effectively parse it
          const animals = data.split('\n').map((line) => line.split('\t'));
          //console.log(animals);

          for(var i = 2; i < animals.length; i++) {
            var animal = animals[i];
            if(animal[0]==urlParams.get('dlc')){
              console.log(animal[1]);

              var animalTemplate = document.getElementById('habitatTemplate').innerHTML;
              var formattedAnimalTemplate = animalTemplate.replaceAll('{animal name}', animal[1])
                                                          .replaceAll('{animal_name}', animal[1].replaceAll(' ', ''))
                                                          .replaceAll('{fence grade}', animal[3])
                                                          .replaceAll('{land area}', animal[4])
                                                          .replaceAll('{water area}', animal[5])
                                                          .replaceAll('{deep water area}', animal[6])
                                                          .replaceAll('{climbing area}', animal[7])
                                                          .replaceAll('{temperature}', animal[8])
                                                          .replaceAll('{group size}', animal[9])
                                                          .replaceAll('{male bachelor}', animal[10])
                                                          .replaceAll('{female bachelor}', animal[11])
                                                          .replaceAll('{thumbnail}', 'images/' + animal[1] + '.png')

              document.getElementById('animalList').innerHTML += formattedAnimalTemplate;
            }
            
          }
        }
      });

    
    
}
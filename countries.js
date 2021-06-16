const countries = [
  'Afghanistan',  'Albania',  'Algeria',  'Andorra',  'Angola',  'Antigua and Barbuda',  'Argentina',  'Armenia',  'Australia',
  'Austria',  'Azerbaijan',  'Bahamas',  'Bahrain',  'Bangladesh',  'Barbados',  'Belarus',  'Belgium',  'Belize',  'Benin',
  'Bhutan',  'Bolivia',  'Bosnia and Herzegovina',  'Botswana',  'Brazil',  'Brunei',  'Bulgaria',  'Burkina Faso',  'Burundi',
  'Cambodia',  'Cameroon',  'Canada',  'Cape Verde',  'Central African Republic',  'Chad',  'Chile',  'China',  'Colombi',
  'Comoros',  'Congo (Brazzaville)',  'Congo',  'Costa Rica',  "Cote d'Ivoire",  'Croatia',  'Cuba',  'Cyprus',  'Czech Republic',
  'Denmark',  'Djibouti',  'Dominica',  'Dominican Republic',  'East Timor (Timor Timur)',  'Ecuador',  'Egypt',  'El Salvador',
  'Equatorial Guinea',  'Eritrea',  'Estonia',  'Ethiopia',  'Fiji',  'Finland',  'France',  'Gabon',  'Gambia, The',  'Georgia',  'Germany',
  'Ghana',  'Greece',  'Grenada',  'Guatemala',  'Guinea',  'Guinea-Bissau',  'Guyana',  'Haiti',  'Honduras',  'Hungary',  'Iceland',  'India',
  'Indonesia',  'Iran',  'Iraq',  'Ireland',  'Israel',  'Italy', 'Jamaica',  'Japan',  'Jordan',  'Kazakhstan',  'Kenya',  'Kiribati',  'Korea, North',
  'Korea, South',  'Kuwait',  'Kyrgyzstan',  'Laos',  'Latvia',  'Lebanon',  'Lesotho',  'Liberia',  'Libya',  'Liechtenstein',  'Lithuania',  'Luxembourg',
  'Macedonia',  'Madagascar',  'Malawi',  'Malaysia',  'Maldives',  'Mali',  'Malta',  'Marshall Islands',  'Mauritania',  'Mauritius',  'Mexico',
  'Micronesia',  'Moldova',  'Monaco',  'Mongolia',  'Morocco',  'Mozambique',  'Myanmar',  'Namibia',  'Nauru',  'Nepal',  'Netherlands',  'New Zealand',
  'Nicaragua',  'Niger',  'Nigeria',  'Norway',  'Oman',  'Pakistan',  'Palau',  'Panama',  'Papua New Guinea',  'Paraguay',  'Peru',
  'Philippines',  'Poland',  'Portugal',  'Qatar',  'Romania',  'Russia',  'Rwanda',  'Saint Kitts and Nevis',  'Saint Lucia',  'Saint Vincent',
  'Samoa',  'San Marino',  'Sao Tome and Principe',  'Saudi Arabia',  'Senegal',  'Serbia and Montenegro',  'Seychelles',  'Sierra Leone',
  'Singapore',  'Slovakia',  'Slovenia',  'Solomon Islands',  'Somalia',  'South Africa',
  'Spain',  'Sri Lanka',  'Sudan',  'Suriname',  'Swaziland',  'Sweden',  'Switzerland',  'Syria',  'Taiwan',  'Tajikistan',
  'Tanzania',  'Thailand',  'Togo',  'Tonga',  'Trinidad and Tobago',  'Tunisia',  'Turkey',  'Turkmenistan',  'Tuvalu',  'Uganda',
  'Ukraine',  'United Arab Emirates',  'United Kingdom',  'United States',
  'Uruguay',  'Uzbekistan',  'Vanuatu',  'Vatican City',  'Venezuela',  'Vietnam',  'Yemen',  'Zambia',  'Zimbabwe'
]
//converting all country ele to uppercase
countriesTotal = document.querySelector('.countriesTotal');
countriesTotal.textContent = "Total Number Of Countries : "+countries.length;
let countriesArray =[];
countries.forEach((a)=>{
  countriesArray.push(a.toUpperCase());
})
console.log("countries : ", countriesArray);


//countriesReverse == reverse of countries array
let countriesReverse = [];
for(let i=countriesArray.length-1;i>=0;i--)
{
  countriesReverse.push(countriesArray[i]);
}
console.log("countriesReverse : ",countriesReverse );


/*
//getting active class value
let active = document.getElementsByClassName("active");
console.log("active",active)
let activeValue = active[0].value;
console.log("activeValue",activeValue);
*/


const az = document.querySelector('.az');

//adding active class to 
let count =0;
let activeValue;
let countInput=0;
// Get all buttons with class="btn"
var btns = document.querySelectorAll("button");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    if(count!=0){
      var current = document.getElementsByClassName("active");
      //console.log(current[0])
      current[0].className = current[0].className.replace(" active", "");
    }
    count++;    
    this.className += " active";
    //console.log(this);
    //console.log(this.value);
    activeValue = this.value;
    console.log("activeValue",activeValue);

    //toggling A-Z to Z-A
    if(count!=0 && activeValue==3)
    {
      az.value = 4;
      az.textContent = 'Z-A';
      showAllAZ(countriesArray);      
    }

    //toggling Z-A to A-Z
    if(activeValue==4)
    {
      az.value = 3;
      az.textContent = 'A-Z';
      showAllAZ(countriesReverse);      
    }




   /* if(activeValue==3)
    {
        az.addEventListener('click',function(){
          az.value = 4;
          az.textContent = 'Z-A';
        });                              
    }
    if(activeValue==4)
    {
      az.addEventListener('click',function(){
        az[0].value = 4;
        az.textContent = 'Z-A';
      }); 
    }
    */


  });
} 
console.log('count',count)

/*
//getting active class value
let active = document.getElementsByClassName("active");
console.log("active",active)
let activeValue = active[0].value;
console.log("activeValue",activeValue);
*/





let inputValue;
const input = document.querySelector('input');
const countriesDiv = document.querySelector('.countries');
const countries1 = document.querySelector('.countries1');
let countriesSearch = document.querySelector('.countriesSearch');
let inputColor = document.createElement('span');
let noColor = document.createElement('span');
 
//by default showing all countries -- when buttons not clicked
showAllAZ(countriesArray);   //defult show al countries;

/*
document.querySelector('.az').addEventListener('click',function(){
  console.log(active[0].value)
  if(active[0].value == 3)
  {
    console.log('hj')
    console.log(active[0].value)   
        
    showAllAZ(countriesArray);
    document.querySelector('.az').textContent ='Z-A';
    //active[0].value = 4;
    console.log(active[0].value)
  }
  else if(active[0].value == 4)
  {
    console.log('hj')
    console.log(active[0].value)
    
    document.querySelector('.az').textContent ='A-Z';
    showAllAZ(countriesReverse);
   // active[0].value =3;
  }
})
*/

//changing countries according to input and active buttons
input.addEventListener('input',function(v){
  countInput =1;
  inputValue = v.target.value.toUpperCase();
  console.log("inputvalue",inputValue);
  console.log("activevalue",activeValue)
  let matchArray = [];

  if(inputValue=='' && activeValue == 4)         //if input is null and z-a button active
  {
    countriesSearch.innerHTML = "";
    showAllAZ(countriesReverse);
      
  }
  
  else if(inputValue=='')            //when no button is active and input is empty
  {
    countriesSearch.innerHTML = "";
    showAllAZ(countriesArray);
      
  }  

  else               //if input passed not null
  {
    if(activeValue==1)           //when startwith button is active input passed
    {
      
      console.log(countriesSearch);

      countriesArray.forEach((a)=>{
        if(a.startsWith(inputValue))
        {
          matchArray.push(a);
        }
      })
      noColor.textContent = matchArray.length;
      noColor.style.color = 'rgba(103, 238, 25, 0.993)';
      inputColor.textContent = v.target.value +" are : ";
      inputColor.style.color = 'red';
      inputColor.appendChild(noColor);
      
      countriesSearch.textContent = "Countries starting with ";
      countriesSearch.appendChild(inputColor) ; 
            
      console.log("match ele ",matchArray);
      showAllAZ(matchArray);
    }

    if(activeValue==3 || activeValue==2)    //when search by any word or a-z button is active and input passed
    {
        countriesArray.forEach((a)=>{
          if(a.includes(inputValue))
          {
            matchArray.push(a);
          }
        })
        console.log("match ele ",matchArray);

        noColor.textContent = matchArray.length;
        noColor.style.color = 'rgba(103, 238, 25, 0.993)';
        inputColor.textContent = v.target.value +" are : ";
        inputColor.style.color = 'red';
        inputColor.appendChild(noColor);        
        countriesSearch.textContent = "Countries containing ";
        countriesSearch.appendChild(inputColor) ;

        showAllAZ(matchArray);       
       
    }
    if(activeValue == 4)                    //when z-a button is active and input passed
    {
      countriesReverse.forEach((a)=>{
        if(a.includes(inputValue))
        {
          matchArray.push(a);
        }
      })
      console.log("match ele ",matchArray);

      noColor.textContent = matchArray.length;
      noColor.style.color = 'rgba(103, 238, 25, 0.993)';
      inputColor.textContent = v.target.value +" are : ";
      inputColor.style.color = 'red';
      inputColor.appendChild(noColor);
      
      countriesSearch.textContent = "Countries containing ";
       countriesSearch.appendChild(inputColor) ;
    

      showAllAZ(matchArray);

     
     
    }
  }
  countInput = 0; 


})



//function to display countries passed 
function showAllAZ(Array){
  console.log("arrayfromFun",Array)
  countries1.innerHTML = '';
     let n=0;
     //console.log("n",n)
     for(let i=0;i<=Math.round(Array.length/6);i++)
     {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv';
        for(let j=0;j<6;j++)
        {
          let tdDiv = document.createElement('div');
          tdDiv.className = 'tdDiv';
          tdDiv.textContent =  Array[n];
           n++;
           //console.log("n",n)
          if(tdDiv.textContent!=''){
            rowDiv.appendChild(tdDiv);
          }
          
        }
        
        countries1.appendChild(rowDiv);        
     }

     if(activeValue == 3)
        {
          az.value = 4;
          az.textContent = 'Z-A';
        }
        if(activeValue == 4)
        {
          az.value = 3;
          az.textContent = 'A-Z';
        }
     
}

 
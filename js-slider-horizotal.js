let slider = document.getElementById("myRange");
let CheckBox = document.getElementById("icheckbox")

slider.addEventListener("input",function(){
  
  let valueSlider=slider.value;
  let SortieViews;
  let SortiePrix;

  switch (valueSlider){
     case "0":
      SortieViews = "10k pageviews";
      SortiePrix = "8.00";
      break;
    case "1":
      SortieViews = "50k pageviews";
      SortiePrix = "12.00";
      break;
    case "2":
      SortieViews = "100k pageviews";
      SortiePrix = "16.00";
      break;
    case "3":
      SortieViews = `500k pageviews`;
      SortiePrix = "24.00";
      break;
    case "4":
      SortieViews = "1M pageviews";
      SortiePrix = "36.00";
      break;
    }

    if (CheckBox.checked) {
      SortiePrix = ((SortiePrix/100)*75).toFixed(2);
    }

    document.getElementById("ipageviews").innerText=SortieViews;
    document.getElementById("iprice").innerHTML=SortiePrix;   
    document.getElementById("iprice-tel").innerHTML=SortiePrix;

}); 

CheckBox.addEventListener("click", function () {
  let newPrice = document.getElementById("iprice").innerHTML;
  if (!this.checked) {
    newPrice = ((newPrice / 3) * 4).toFixed(2);
  }
  if (this.checked) {
    newPrice = ((newPrice / 100) * 75).toFixed(2);
  }
  document.getElementById("iprice").innerHTML = newPrice;
});

CheckBox.addEventListener("click", function () {
  let newPrice = document.getElementById("iprice-tel").innerHTML;
  if (!this.checked) {
    newPrice = ((newPrice / 3) * 4).toFixed(2);
  }
  if (this.checked) {
    newPrice = ((newPrice / 100) * 75).toFixed(2);
  }
  document.getElementById("iprice-tel").innerHTML = newPrice;
});


function sliderMovement() {
  let x = (this.value / this.max) * 100;
  slider.style.background =
    "linear-gradient(90deg, hsl(174, 77%, 80%) " +
    x +
    "%, hsl(224, 65%, 95%) " +
    x +
    "%)";
}

slider.addEventListener("mousemove", sliderMovement, false);
slider.addEventListener("click", sliderMovement, false);
 

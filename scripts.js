function calculateTip(event) {
    event.preventDefault();
    let Bill = document.getElementById('Bill').value;
    let ServiceQuality = document.getElementById('ServiceQuality').value;
    let AllPeople = document.getElementById('AllPeople').value;

    if (Bill == '' | ServiceQuality == 0) {
       alert("Por favor, preencha os campos.")
       return;
    }

    if(AllPeople == "" | AllPeople <= 1) {
      AllPeople = 1;
      document.getElementById('each').style.display = "none"  
    } else {
        document.getElementById('each').style.display = "block"
    }
    console.log(Bill, ServiceQuality, AllPeople)
    let total = (Bill * ServiceQuality) / AllPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
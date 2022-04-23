
async function setup(){
    let jsonFetch = await fetch('dunkinDonuts.json');
    let dunkinData = await jsonFetch.json();

    console.log(dunkinData);



    let stateLabels = [];
    let dunkins = [];
    let numberofDunks1 = 0;
    
    for(let entry of dunkinData.data){
        console.log(entry.state);
        if(stateLabels.includes(entry.state) === true){
            numberofDunks1 ++;
            dunkins.push(numberofDunks1);
        }else{
            stateLabels.push(entry.state);
            

            numberofDunks1 ++;
            dunkins.push(numberofDunks1);


            
        }
        //need to keep track of how MANY dunkins in EACH state somehow with this loop as well???
        
        
        //also can't get number of dunkins to show up on bargraph?
        //console.log(dunkins);
    }
  
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stateLabels,
            datasets: [{
                label: '# of Dunkins',
                data: dunkins,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

setup();


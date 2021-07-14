async function getCandidate() {
	const response = await fetch('https://votrr.herokuapp.com/candidate/')
	const data = await response.json();
    document.getElementById('name').innerHTML=data[0].name;
    document.getElementById('party').innerHTML=data[0].party;
    document.getElementById('avatar2').setAttribute("src", data[2].avatar);
    document.getElementById('name1').innerHTML=data[1].name;
    document.getElementById('party1').innerHTML=data[1].party;
    document.getElementById('avatar1').innerHTML=data[1].avatar;
    document.getElementById('name2').innerHTML=data[2].name;
    document.getElementById('party2').innerHTML=data[2].party;
    document.getElementById('avatar2').innerHTML=data[2].avatar;
    document.getElementById('name3').innerHTML=data[3].name;
    document.getElementById('party3').innerHTML=data[3].party;
    document.getElementById('avatar3').innerHTML=data[3].avatar;
    console.log(data)
};
getCandidate()




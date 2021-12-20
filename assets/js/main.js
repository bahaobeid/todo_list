document.title='task2';

let body=document.body;

//creat all main element in page:

let main=document.createElement('div'),
    h1=document.createElement('h1'),
    inputdiv=document.createElement('div'),
    label1=document.createElement('label'),
    label2=document.createElement('label'),
    input1=document.createElement('input'),
    input2=document.createElement('input'),
    select1=document.createElement('select'),
    
    o_Monday=document.createElement('option'),
    o_Tuesday=document.createElement('option'),
    o_Wednesday=document.createElement('option'),
    o_Thursday=document.createElement('option'),
    o_Friday=document.createElement('option'),
    o_Saturday=document.createElement('option'),
    o_Sunday=document.createElement('option'),
    o_Note=document.createElement('option'),

    first=document.createElement('div'),
    div_1=document.createElement('div'),
    div_2=document.createElement('div'),
    div_3=document.createElement('div'),
    div_4=document.createElement('div'),
    div_5=document.createElement('div'),
    div_6=document.createElement('div'),
    div_7=document.createElement('div'),
    div_8=document.createElement('div'),
    
    h21=document.createElement('h2'),
    h22=document.createElement('h2'),
    h23=document.createElement('h2'),
    h24=document.createElement('h2'),
    h25=document.createElement('h2'),
    h26=document.createElement('h2'),
    h27=document.createElement('h2'),
    h28=document.createElement('h2'),
    table1=document.createElement('table'),
    table2=document.createElement('table'),
    table3=document.createElement('table'),
    table4=document.createElement('table'),
    table5=document.createElement('table'),
    table6=document.createElement('table'),
    table7=document.createElement('table'),
    table8=document.createElement('table'),

    tbody1=document.createElement('tbody'),
    tbody2=document.createElement('tbody'),
    tbody3=document.createElement('tbody'),
    tbody4=document.createElement('tbody'),
    tbody5=document.createElement('tbody'),
    tbody6=document.createElement('tbody'),
    tbody7=document.createElement('tbody'),
    tbody8=document.createElement('tbody');
    

    //append main container and set id
body.insertBefore(main, body.firstChild);
main.setAttribute('id','container');

let maincontainer=document.getElementById('container');


// append the divs inside container:

maincontainer.appendChild(h1);
maincontainer.appendChild(inputdiv),
inputdiv.setAttribute('id','inputdata')

maincontainer.appendChild(first);
first.setAttribute('id','secondContainer');

let inputdata=document.getElementById('inputdata'),
    secondContainer=document.getElementById('secondContainer');

inputdata.appendChild(label1);
inputdata.appendChild(input1);
inputdata.appendChild(label2);
inputdata.appendChild(select1);
inputdata.appendChild(input2);

select1.appendChild(o_Monday);
select1.appendChild(o_Tuesday);
select1.appendChild(o_Wednesday);
select1.appendChild(o_Thursday);
select1.appendChild(o_Friday);
select1.appendChild(o_Saturday);
select1.appendChild(o_Sunday);
select1.appendChild(o_Note);

input1.setAttribute('type','text');
input2.setAttribute('type','submit');



let selectdate=document.querySelector('select'),
    optiondate=document.querySelectorAll('option');
    


secondContainer.appendChild(div_1);
secondContainer.appendChild(div_2);
secondContainer.appendChild(div_3);
secondContainer.appendChild(div_4);
secondContainer.appendChild(div_5);
secondContainer.appendChild(div_6);
secondContainer.appendChild(div_7);
secondContainer.appendChild(div_8);

//set attribute for  all divs:

div_1.setAttribute('id','div1');
div_2.setAttribute('id','div2');
div_3.setAttribute('id','div3');
div_4.setAttribute('id','div4');
div_5.setAttribute('id','div5');
div_6.setAttribute('id','div6');
div_7.setAttribute('id','div7');
div_8.setAttribute('id','div8');

div_1.setAttribute('class','sub_div');
div_2.setAttribute('class','sub_div');
div_3.setAttribute('class','sub_div');
div_4.setAttribute('class','sub_div');
div_5.setAttribute('class','sub_div');
div_6.setAttribute('class','sub_div');
div_7.setAttribute('class','sub_div');
div_8.setAttribute('class','sub_div');

// catch all divs by id ans all by class :
let div1=document.getElementById('div1'),
    div2=document.getElementById('div2'),
    div3=document.getElementById('div3'),
    div4=document.getElementById('div4'),
    div5=document.getElementById('div5'),
    div6=document.getElementById('div6'),
    div7=document.getElementById('div7'),
    div8=document.getElementById('div8'),
    divs=document.getElementsByClassName('sub_div');

// append h2 for all sub_div:    
div1.appendChild(h21);
div2.appendChild(h22);
div3.appendChild(h23);
div4.appendChild(h24);
div5.appendChild(h25);
div6.appendChild(h26);
div7.appendChild(h27);
div8.appendChild(h28);
div1.appendChild(table1);
div2.appendChild(table2);
div3.appendChild(table3);
div4.appendChild(table4);
div5.appendChild(table5);
div6.appendChild(table6);
div7.appendChild(table7);
div8.appendChild(table8);
table1.appendChild(tbody1);
table2.appendChild(tbody2);
table3.appendChild(tbody3);
table4.appendChild(tbody4);
table5.appendChild(tbody5);
table6.appendChild(tbody6);
table7.appendChild(tbody7);
table8.appendChild(tbody8);


let tables=document.querySelectorAll('table'),
    tbodys=document.querySelectorAll('tbody');
    




// set the content and the style for h1:
h1.textContent='- WEEKLY TO DO LIST -';
h1.style.textAlign='center';
h1.style.color='blue';
h1.style.fontSize='70px';
h1.style.margin='20px'

// set style for second container:
secondContainer.style.display='flex';  
secondContainer.style.flexWrap='wrap'; 
secondContainer.style.marginTop='50px'



for (let i=0;i<8;i++){
    divs[i].style.width='25%';
    divs[i].style.height='300px';
    divs[i].style.border="01px solid rgba(0, 0, 0, 0.5)";
    let daysName=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Notes'],
        h2tag=document.querySelectorAll('h2');

    h2tag[i].textContent=daysName[i];
    h2tag[i].style.textAlign='center';
    h2tag[i].style.padding='10px';

    optiondate[i].setAttribute('class','option');
    optiondate[i].textContent=daysName[i];

    tables[i].setAttribute('class','table');
    tbodys[i].setAttribute('class','tbody');
    
};
    
label1.innerText='please input your note here:';
label2.innerText='please choose section :';

all_label=document.getElementsByTagName('label');


for ( let i=0 ; i<all_label.length ;i++){
    all_label[i].style.marginLeft='30px';
    all_label[i].style.padding='20px';
    all_label[i].style.color='blue';
    all_label[i].style.fontSize='20px';
};

let i=0;

do{
    input1.style.marginLeft='5px';
    input1.style.padding='5px';
    input1.style.fontSize='15px';
    select1.style.marginLeft='5px';
    select1.style.padding='5px';
    select1.style.fontSize='15px';
    i++
}while (i<1);



const allnotes=[
    {Monday:['m1','m2','m3']},
    {Tuesday:['t1','t2','t3','t4']},
    {Wednesday:['w1','w2','w3','w4','w5']},
    {Thursday:['th1','th2','th3','th4','th5','th6']},
    {Friday:['f1','f2','f3','f4']},
    {Saturday:['sa1','sa2']},
    {Sunday:['su1','su2','su3','su4']},
    {Notes:['thhtthdh','rdhdtjyj','awfdhykukrrgrg']}];


function appendfunc(){
    
    if (selectdate.value=='Monday'){
        allnotes[0].Monday.push(input1.value);
    }
    else if (selectdate.value=='Tuesday'){
        allnotes[1].Tuesday.push(input1.value);
    }
    else if (selectdate.value=='Wednesday'){
        allnotes[2].Wednesday.push(input1.value);
    }
    else if (selectdate.value=='Thursday'){
        allnotes[3].Thursday.push(input1.value);
    }
    else if (selectdate.value=='Friday'){
        allnotes[4].Friday.push(input1.value);
    }
    else if (selectdate.value=='Saturday'){
        allnotes[5].Saturday.push(input1.value);
    }
    else if (selectdate.value=='Sunday'){
        allnotes[6].Sunday.push(input1.value);
    }
    else if (selectdate.value=='Notes'){
        allnotes[7].Notes.push(input1.value);
    };
    
};





function tabledata(){
    let data1=allnotes[0].Monday,
        data2=allnotes[1].Tuesday,
        data3=allnotes[2].Wednesday,
        data4=allnotes[3].Thursday,
        data5=allnotes[4].Friday,
        data6=allnotes[5].Saturday,
        data7=allnotes[6].Sunday,
        data8=allnotes[7].Notes,
        data=[data1,data2,data3,data4,data5,data6,data7,data8];
    
    for(let o=0;o<tbodys.length;o++){

        data[o].forEach((element,index) => {
            tbodys[o].innerHTML+=
            `<tr class='trow'>
            <td><input type="checkbox" class='chkbox' onclick=line_thro() ><lable class='checkbox'>${element}</lable></td>
            <td><button class='del' onclick=deletitem(${index},${o})>Delete</button></td>
            </tr>`;
            
        });
            
    } 
    decoration();
    
}
tabledata();

function resettable(){
    for (tbody in tbodys){
        tbodys[tbody].innerHTML=''
    } 
}


function submitfunc(){
    appendfunc();
    resettable();
    tabledata();
}


input2.onclick=function(){submitfunc()};



function deletitem(index,o){
    let data1=allnotes[0].Monday,
    data2=allnotes[1].Tuesday,
    data3=allnotes[2].Wednesday,
    data4=allnotes[3].Thursday,
    data5=allnotes[4].Friday,
    data6=allnotes[5].Saturday,
    data7=allnotes[6].Sunday,
    data8=allnotes[7].Notes,
    data=[data1,data2,data3,data4,data5,data6,data7,data8];
    data[o].splice(index,1);
    resettable();
    tabledata();
    
}

let labels=document.getElementsByClassName('checkbox'),
    chkbox=document.getElementsByClassName('chkbox');


function line_thro(){
    
    for (let u=0;u<labels.length;u++){
            if (chkbox[u].checked == true){
                
                labels[u].style.textDecoration='line-through'
            } else{
                labels[u].style.textDecoration='none'
            }
        }};

function decoration(){
    let labels=document.getElementsByClassName('checkbox'),
    del=document.getElementsByClassName('del'),
    trow=document.getElementsByClassName('trow'),
    chkbox=document.getElementsByClassName('chkbox');

    
    for (let i=0;i<labels.length;i++){
        labels[i].style.display='inline-block';
        labels[i].style.width='200px';
        labels[i].style.padding='05px';
        labels[i].style.borderBottom='01px solid black';
        chkbox[i].style.padding='5px';
        chkbox[i].style.position='relative';
        chkbox[i].style.bottom='-7px';
        chkbox[i].style.height='15px';
        chkbox[i].style.width='15px';
        chkbox[i].style.padding='5px';
        chkbox[i].style.margin='5px';
        del[i].style.width='60px';
        del[i].style.height='25px';
        del[i].style.width='60px';
        del[i].style.backgroundColor='blue';
        del[i].style.color='white';
        del[i].style.borderRadius='05px'
        
    };
    
    for(let p=0; p<trow.length ; p++){
        trow[p].style.lineHeight='25px';
    }

    input2.style.width='60px';
    input2.style.height='35px';
    input2.style.width='100px';
    input2.style.backgroundColor='blue';
    input2.style.color='white';
    input2.style.borderRadius='05px';
    input2.style.marginLeft='40px'

}
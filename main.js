var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var sturentid=202037012;

const numbers=["2", "0", "2", "0", "3", "4", "0", "1", "5"];

function drawNumber(number, x, y) {
    switch (number) {
      case "0":
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+100, y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x+100, y+100);
        ctx.stroke();
            ctx.strokeStyle = "black";
            break;
      case "1":
        ctx.beginPath();
        ctx.moveTo(x, y); 
        ctx.lineTo(x, y+100);
        ctx.stroke();
            ctx.strokeStyle = "black";
            break;
      case "2":
        ctx.beginPath();
    ctx.moveTo(x, y); 
    ctx.lineTo(x+100, y); 
    ctx.lineTo(x+100, y+50); 
    ctx.lineTo(x, y+50);
    ctx.lineTo(x, y+100);
    ctx.lineTo(x+100, y+100);
    ctx.stroke();
        ctx.strokeStyle = "black";
        break;

        case "3":
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+100, y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x+100, y+50);
        ctx.lineTo(x, y+50);
        ctx.lineTo(x+100, y+50);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.stroke();
        ctx.strokeStyle = "black";
        
        break;
      case "4":
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x , y+50);
        ctx.lineTo(x+100, y+50);
        ctx.lineTo(x+100, y);
        ctx.lineTo(x+100, y+100);
        ctx.stroke();
        ctx.strokeStyle = "black";
        break;

      case "5":
        ctx.beginPath();
        ctx.moveTo(x, y); 
        ctx.lineTo(x+100, y);
        ctx.lineTo(x, y); 
        ctx.lineTo(x, y+50);
        ctx.lineTo(x, y+50);
        ctx.lineTo(x+100, y+50);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.stroke();
        ctx.strokeStyle = "black";
        break;

        case "6":
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+100, y); 
        ctx.lineTo(x, y);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x, y+50);
        ctx.lineTo(x+100, y+50);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.stroke();
        ctx.strokeStyle = "black";
        break;

        case "7":
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+100, y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y+50);
        ctx.stroke();
            ctx.strokeStyle = "black";
            break;

        case "8":
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+100, y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y+50);
        ctx.lineTo(x+100, y+50);
        ctx.stroke();
            ctx.strokeStyle = "black";
            break;

        case "9":
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.moveTo(x,y+50);
            ctx.moveTo(x+100,y+50);
            ctx.moveTo(x,y);
            ctx.moveTo(x+100,y);
            ctx.moveTo(x+100,y+100);
            ctx.moveTo(x,y+100);
            ctx.stroke();
            ctx.strokeStyle = "black";
                
                break;
    }
  }
  
  let x = 0;
  let y = 0;
  for (const number of numbers) {
    drawNumber(number, x, y);
    x += 130;
  }


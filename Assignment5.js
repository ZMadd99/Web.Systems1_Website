var width=0;
var height=0;
var interval;
window.onload = function(){
    var cns = document.getElementById("mycanvas");

    width = cns.width;
    height = cns.height;
    var context = cns.getContext("2d");
    var designContext =  document.getElementById("desingcanvas").getContext("2d");
    rod1=Rod.create(250,250,80,0,10.0,"#FFFFFF");
    rod2=Rod.create(rod1.endx,rod1.endy,130,Math.PI,80.0,"#FFFFFF");

    interval = setInterval(function(){draw(context,designContext);},1);


};


var Rod={
    startx:0,
    starty:0,
    endx:0,
    endy:0,
    length:0,
    angle:0,
    speed:100,
    color:"#233067",
    create:function(startx,starty,length,angle,speed,color)
    {
        var obj=Object.create(this);
        obj.startx=startx;
        obj.starty=starty;
        obj.length=length;
        obj.angle=angle;
        obj.speed=speed/500.0;

        obj.color=color;

        obj.endx=startx+length*Math.cos(angle);
        obj.endy=starty+length*Math.sin(angle);
        return obj;
    },

    update:function(startx,starty)
    {
        this.startx=startx;
        this.starty=starty;
        this.angle+=this.speed;
        if(this.angle>2*Math.PI)
            this.angle=0;
        this.endx=this.startx+this.length*Math.cos(this.angle);
        this.endy=this.starty+this.length*Math.sin(this.angle);
    },

    drawRod:function(context)
    {
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(this.startx,this.starty);
        context.lineTo(this.endx,this.endy);
        context.stroke();
        context.closePath();
    }

};


function draw(context,designContext)
{
    drawing=true;
    designContext.strokeStyle="#FF0000";
    designContext.lineWidth=0.25;
    designContext.beginPath();
    designContext.moveTo(rod2.endx,rod2.endy);

    context.clearRect(0,0,width,height);

    rod1.drawRod(context);
    rod1.update(rod1.startx,rod1.starty);
    rod2.drawRod(context);
    rod2.update(rod1.endx,rod1.endy);

    designContext.lineTo(rod2.endx,rod2.endy);
    designContext.stroke();
    designContext.closePath();
}
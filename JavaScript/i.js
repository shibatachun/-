var num = 1;
function fun()
{

    num++;
    if (num>4)
    {
        num = 1;
    }
    var img = document.getElementById("img_change");
    switch (num)
    {
        case 1:
            img.src=" ./QQ图片20210424010334.jpg"
            break;
        case 2:
            img.src = "https://cdn.discordapp.com/attachments/850437674724360233/862405201847910410/FB_IMG_1625680952955.jpg"
            break;
        case 3:
            img.src="https://cdn.discordapp.com/attachments/850437674724360233/862024748012011580/845a.jpeg"
            break;
        case 4:
            img.src="https://cdn.discordapp.com/attachments/850437674724360233/852600212534722591/illust_89693204_20210611_011005.jpg"
            break;
    }
}

setInterval(fun,3000);
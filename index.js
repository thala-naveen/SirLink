function call()
{
    var d=days.options[days.selectedIndex].text
    var t=times.options[times.selectedIndex].text
    var b=batch.options[batch.selectedIndex].text

    //alert(d+" "+t)
    var i=days.selectedIndex
    var k=times.selectedIndex
    //alert(i+" "+k)
    switch (i) 
    {
        case 1:
           switch (k) {
               case 1:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;

               case 2:
                   className.innerHTML="Computer Graphics"
                   MeetingLink.innerHTML="https://meet.google.com/soq-pqcb-tnt"
                   MeetingLink.href="https://meet.google.com/soq-pqcb-tnt"
                   Facultyname.innerHTML="Hemlata Arya"
                   break;

                case 3:
                    className.innerHTML="M2"
                    MeetingLink.innerHTML="<b>New link every time<br>Check watsapp group<b>"
                    MeetingLink.href=""
                    Facultyname.innerHTML="Rakesh Singh Tomar" 
                    break;
                
                case 4:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;

                case 5:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;
                
                case 6:
                    if(b=="B1")
                    {
                        className.innerHTML="Hard Ware Lab"
                        MeetingLink.innerHTML="https://meet.google.com/efq-sjwa-tun"
                        MeetingLink.href="https://meet.google.com/efq-sjwa-tun"
                        Facultyname.innerHTML="Amit kumar manjhawar <br> Sanjay Arolia"
                    }
                    else
                    {
                        className.innerHTML="Computer Graphics Lab"
                        MeetingLink.innerHTML="https://meet.google.com/ruk-kuax-pzp"
                        MeetingLink.href="https://meet.google.com/ruk-kuax-pzp"
                        Facultyname.innerHTML="Hemlata Arya mam" 
                    }
                    break;
           
               default:
                   break;
           }
            break;

         case 2:
             switch (k) {
                case 1:
                    className.innerHTML="No Class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;
                
                case 2:
                    className.innerHTML="DAA"
                    MeetingLink.innerHTML="https://meet.google.com/rjr-zgxw-ptv"
                    MeetingLink.href="https://meet.google.com/rjr-zgxw-ptv"
                    Facultyname.innerHTML="Lav Upadhyaa"
                    break;

                case 3:
                    className.innerHTML="CSO"
                    MeetingLink.innerHTML="https://meet.google.com/duy-ipqr-ahk"
                    MeetingLink.href="https://meet.google.com/duy-ipqr-ahk"
                    Facultyname.innerHTML="Anjula Mehta"
                    break;   

                case 4:
                    className.innerHTML="OS"
                    MeetingLink.innerHTML="https://meet.google.com/oho-imjr-dfc"
                    MeetingLink.href="https://meet.google.com/oho-imjr-dfc"
                    Facultyname.innerHTML="Rajni sir(RRM)"    
                    break;
                
                case 5:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;

                case 6:
                    if(b=="b1")
                    {
                        className.innerHTML="DAA LAB"
                        MeetingLink.innerHTML="https://drive.google.com/drive/folders/10kIyHCcXYHxp0gb5eOwsaykh6xHgsQ-R"
                        MeetingLink.href="https://drive.google.com/drive/folders/10kIyHCcXYHxp0gb5eOwsaykh6xHgsQ-R"
                        Facultyname.innerHTML="Lav upadhya <br> Aishwarya ma'am" 
                    }
                    else
                    {
                        className.innerHTML="Hard ware lab"
                        MeetingLink.innerHTML="http://meet.google.com/efq-sjwa-tun"
                        MeetingLink.href="http://meet.google.com/efq-sjwa-tun"
                        Facultyname.innerHTML="Anjula Mehto" 
                    }
                    break;

                    default:
                     break;
                     
             }
             break   
        case 3:
            switch (k) {
                case 1:
                    className.innerHTML="No Class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;

                case 2:
                    className.innerHTML="OS"
                    MeetingLink.innerHTML="https://meet.google.com/oho-imjr-dfc"
                    MeetingLink.href="https://meet.google.com/oho-imjr-dfc"
                    Facultyname.innerHTML="Rajni sir(RRM)"
                    break;

                case 3:
                    className.innerHTML="M2"
                    MeetingLink.innerHTML="New link every day"
                    MeetingLink.href=""
                    Facultyname.innerHTML="Rakesh singh Tomar"
                    break;

                case 4:
                    className.innerHTML="Computer Graphics"
                    MeetingLink.innerHTML="https://meet.google.com/soq-pqcb-tnt"
                    MeetingLink.href="https://meet.google.com/soq-pqcb-tnt"
                    Facultyname.innerHTML="Hemlata Arya"
                    break;
                
                case 5:
                    className.innerHTML="No Class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;
                
                case 6:
                    if(b=="b1")
                    {className.innerHTML="Hard Ware Lab"
                    MeetingLink.innerHTML="https://meet.google.com/efq-sjwa-tun"
                    MeetingLink.href="https://meet.google.com/efq-sjwa-tun"
                    Facultyname.innerHTML="Amit kumar manjhawar <br> Sanjay Arolia"}
                    else
                    {
                        className.innerHTML="Hard Ware Lab"
                        MeetingLink.innerHTML=""
                        MeetingLink.href=""
                        Facultyname.innerHTML="aiyshwarya Ma'am"     
                    }
                    break;

                default:
                    break;
            }
            break;

            case 4:
                switch (k) {
                    case 1:
                        className.innerHTML="No class"
                        MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                        break;

                    case 2:
                        className.innerHTML="CSO"
                        MeetingLink.innerHTML="https://meet.google.com/duy-ipqr-ahk"
                        MeetingLink.href="https://meet.google.com/duy-ipqr-ahk"
                        Facultyname.innerHTML="Anjula Mehta"
                        break; 
                        
                    case 3:
                        className.innerHTML="M2"
                        MeetingLink.innerHTML="New link every day"
                        MeetingLink.href=""
                        Facultyname.innerHTML="Rakesh singh Tomar"
                        break;

                    case 4:
                        className.innerHTML="DAA"
                        MeetingLink.innerHTML="https://meet.google.com/rjr-zgxw-ptv"
                        MeetingLink.href="https://meet.google.com/rjr-zgxw-ptv"
                        Facultyname.innerHTML="Lav Upadhyaa"
                        break;

                    case 5:
                        className.innerHTML="No class"
                        MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                        break;
                        
                    case 6:

                        if(b=="b1")
                        {
                            className.innerHTML="Computer graphics lab"
                            MeetingLink.innerHTML="https://meet.google.com/ogp-hmhn-npk"
                            MeetingLink.href="https://meet.google.com/ogp-hmhn-npk"
                            Facultyname.innerHTML="Hemlata arya maam"
                        }
                        else
                        {
                            className.innerHTML="Hard ware lab"
                            MeetingLink.innerHTML="http://meet.google.com/efq-sjwa-tun"
                            MeetingLink.href="http://meet.google.com/efq-sjwa-tun"
                            Facultyname.innerHTML="Anjula Mehto" 
                        }
                        break;   

                    default:
                        break;
                }
                break

         case 5:
             switch (k) {
                 case 1:
                    className.innerHTML="DAA"
                    MeetingLink.innerHTML="https://meet.google.com/rjr-zgxw-ptv"
                    MeetingLink.href="https://meet.google.com/rjr-zgxw-ptv"
                    Facultyname.innerHTML="Lav Upadhyaa"
                     break;
                
                case 2:
                    className.innerHTML="CSO"
                    MeetingLink.innerHTML="https://meet.google.com/duy-ipqr-ahk"
                    MeetingLink.href="https://meet.google.com/duy-ipqr-ahk"
                    Facultyname.innerHTML="Anjula Mehta"
                    break;

                case 3:
                    className.innerHTML="OS"
                    MeetingLink.innerHTML="https://meet.google.com/oho-imjr-dfc"
                    MeetingLink.href="https://meet.google.com/oho-imjr-dfc"
                    Facultyname.innerHTML="Rajni sir(RRM)"
                    break;

                case 4:
                    className.innerHTML="Computer Graphics"
                    MeetingLink.innerHTML="https://meet.google.com/soq-pqcb-tnt"
                    MeetingLink.href="https://meet.google.com/soq-pqcb-tnt"
                    Facultyname.innerHTML="Hemlata Arya"
                    break;    

                case 5:
                    className.innerHTML="150316 <br><font></font>"
                    MeetingLink.innerHTML="New link every time <br> Check your watsapp grp:)"
                    MeetingLink.href=""
                    Facultyname.innerHTML="Amit Manjhawar"
                    break;    

                case 6:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;    
                 default:
                     break;
             }
             break       

        case 6:
            switch (k) {
                case 1:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;
                
                case 2:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;

                case 3:
                    className.innerHTML="No class"
                    MeetingLink.innerHTML=""
                   MeetingLink.href=""
                   Facultyname.innerHTML=""
                    break;        

                case 4:
                    className.innerHTML="Computer Graphics <br> <b>Remidial Class</b>"    
                    MeetingLink.innerHTML="https://meet.google.com/soq-pqcb-tnt"
                    MeetingLink.href="https://meet.google.com/soq-pqcb-tnt"
                    Facultyname.innerHTML="Hemlata Arya"
                    break;

                case 5:
                    className.innerHTML="DAA <br> Remedial <b>class</b>"
                    MeetingLink.innerHTML="https://meet.google.com/rjr-zgxw-ptv"
                    MeetingLink.href="https://meet.google.com/rjr-zgxw-ptv"
                    Facultyname.innerHTML="Lav Upadhyaa"   
                    break;

                case 6:
                    className.innerHTML="M2 <br><b> Remdial class </b>"
                    MeetingLink.innerHTML="Different link every time"
                    Facultyname.innerHTML="Rakesh Singh Tomar"    
                    break;

                    default:
                    break;
            }
            break     
        default:
            break;
    }
}
var contacts_flag = false;
function show_contacts()
{
    if(!contacts_flag)
    {
        let icon = document.getElementById("down");
        icon.src = "up.svg";
        contacts_flag = true;
        //---------------------
        let line = document.getElementById("contacts");
        line.classList.remove('invisible');
        line.classList.add('contacts');
    }
    else
    {
        let icon = document.getElementById("down");
        icon.src = "down.svg";
        contacts_flag = false;
        //---------------------
        let line = document.getElementById("contacts");
        line.classList.remove('contacts');
        line.classList.add('invisible');
        
    }
}
let name;
let position;
let phone;

// let visitcard = ' <TABLE width="100%" border="0">'
// +' <TR>'
// +' <TD align="CENTER" valign="CENTER">'
// +' <IMG src="images/visit_card.gif">'
// +' </TD>'
// +' <TD align="CENTER">'
// +' <B>' + name + '</B><BR>'
// +' <I>' + position + '</I><BR>'
// +' <FONT color="blue">' + phone + '</FONT>'
// +' </TD>'
// +' </TR>'
// +' </TABLE>'; 


function Click() {
    name = prompt('Input name', '');
    position = prompt('Input position', '');
    phone = prompt('Input phone', '');
    
    let visitcard = createVisitCard(name, position, phone);


    document.write('<TABLE width="100%" border="0" align="CENTER">');
for (var y = 0; y < 12; y++) {
    document.write('<TR>');
    for (var x = 0; x < 3; x++) {
        document.write('<TD align="CENTER" style="border-style: dashed; borderwidth:thin;">');
        document.write(visitcard);
        document.write('</TD>');
    }
    document.write('</TR>');
}
document.write('</TABLE>');
}

function createVisitCard(name, position, phone) {
    return ' <TABLE width="100%" border="0">'
        +' <TR>'
        +' <TD align="CENTER" valign="CENTER">'
        +' <IMG src="/roma.jpg" style="width: 70px; height: 70px">'
        +' </TD>'
        +' <TD align="CENTER">'
        +' <B>' + name + '</B><BR>'
        +' <I>' + position + '</I><BR>'
        +' <FONT color="blue">' + phone + '</FONT>'
        +' </TD>'
        +' </TR>'
        +' </TABLE>';
}




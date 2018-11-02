function SidebarMenu() {
    this.isOpen = true;
    this.isOnTheLeft = true;
    this.isOnTheRight = false;
    this.bgColor = 'orangered';
}

SidebarMenu.prototype.render = function () {
    const menuDiv = document.createElement('div');

    menuDiv.style.backgroundColor = this.bgColor;
    menuDiv.style.position = 'fixed';
    menuDiv.style.top = '0';
    menuDiv.style.width = '200px';
    menuDiv.style.height = '100vh';

    if (this.isOnTheLeft) menuDiv.style.left = '0';
    if (this.isOnTheRight) menuDiv.style.right = '0';
    if (!this.isOpen) menuDiv.style.display = 'none';

    document.body.appendChild(menuDiv);
}

const menu1 = new SidebarMenu();
menu1.render();
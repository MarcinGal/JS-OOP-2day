(function () {

    function ClickableButton(label, onClickHandler) {
        this.label = label;
        this.onClickHandler = onClickHandler;

        this.render()
    }

    ClickableButton.prototype.render = function () {
        const button = document.createElement('button');
        button.innerText = this.label;
        button.addEventListener('click', this.onClickHandler);
        document.body.appendChild(button);
    }

    function SidebarMenu(color, direction) {
        this.isOpen = true;
        this.isOnTheLeft = direction === 'left' ? true : false;
        this.isOnTheRight = direction === 'right' ? true : false;
        if (!this.isOnTheLeft && !this.isOnTheRight) {
            this.isOnTheLeft = true;
        }
        this.bgColor = color || 'orangered';

        this.init();
    }

    SidebarMenu.prototype.init = function () {
        new ClickableButton(
            'Toggle menu',
            this.toggleMenu.bind(this)
        );

        this.render()
    }


    SidebarMenu.prototype.render = function () {
        if (this.menuDiv) this.menuDiv.remove();
        this.menuDiv = document.createElement('div');

        this.menuDiv.style.backgroundColor = this.bgColor;
        this.menuDiv.style.position = 'fixed';
        this.menuDiv.style.top = '0';
        this.menuDiv.style.width = '200px';
        this.menuDiv.style.height = '100vh';

        if (this.isOnTheLeft) this.menuDiv.style.left = '0';
        if (this.isOnTheRight) this.menuDiv.style.right = '0';
        if (!this.isOpen) this.menuDiv.style.display = 'none';

        document.body.appendChild(this.menuDiv);

    }



    SidebarMenu.prototype.toggleMenu = function () {
        if (this.isOpen) {
            this.isOpen = false;
        }
        else {
            this.isOpen = true;
        }
        this.render();
    }

    window.SidebarMenu = SidebarMenu;
})()

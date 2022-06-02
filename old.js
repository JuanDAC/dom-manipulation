
window.onload = () => {
    const $listItems = document.querySelector(".my_list");
    const $addItem = document.querySelector("#add_item");
    const $removeItem = document.querySelector("#remove_item");
    const $clearList = document.querySelector("#clear_list");
    $addItem.onclick = addItem($listItems);
    $removeItem.onclick = removeElement($listItems);
    $clearList.onclick = removeElement($listItems, true);
};

const removeItem = ($listItems, all = false) => () => {
    const lastChild = [...$listItems.children].pop();
    if (!lastChild)
        return;
    $listItems.removeChild(lastChild);
    all && removeLast($listItems, all)($listItems);
}

const removeElement = ($listItems, all = false) => () => {
    let lastChild = null;
    while ($listItems.children.length > 0) {
        lastChild = [...$listItems.children].pop();
        $listItems.removeChild(lastChild);
        if (!all)
            break;
    }
}

const addItem = ($listItems) => () => {
    const $newItem = document.createElement("LI");
    $newItem.textContent = "Item";
    $listItems.appendChild($newItem)
}



function Person(name, edad) {
    this.name = name;
    this.edad = edad;
    this.hablar = function () {
        console.log(`hola soy, ${this.name} y tengo ${this.edad} de edad`);
    };
}

const jefe = new Person("Eduardo", 35);

jefe.hablar();
const { hablar } = jefe;
hablar();






















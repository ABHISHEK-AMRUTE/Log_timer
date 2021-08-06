function getListItem(value, time)
{
    const listItem = document.createElement('li');
    listItem.innerHTML = time + " -> "+ value;

    return listItem;
}
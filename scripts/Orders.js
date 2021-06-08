import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()

const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    const totalCost = foundMetal.price + foundSize.price + foundStyle.price
    if (foundType.id === 2) {
        let costString = totalCost * 2
        return `<li>Order #${order.id} costs $${costString}</li>`
    }
    else if (foundType.id === 3) {
        let costString = totalCost * 4
        return `<li>Order #${order.id} costs $${costString}</li>`
    }
    else {
        let costString = totalCost
        return `<li>Order #${order.id} costs $${costString}</li>`
    }
    // const costString = totalCost.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD"
    // })
    // return `<li>
    //     Order #${order.id} cost ${costString}
    // </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


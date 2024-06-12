$(document).ready(function () {
    const client = window.ShopifyBuy.buildClient({
        domain: 'www.gingerfox.co.uk',
        storefrontAccessToken: '5f230d2d8cbccf9bbe5d60551645777f'
    });


    $("#BuyNowBtnBanner").click(function () {
        //const input = {
        //    lineItems: [{
        //        variantId: 'gid://shopify/ProductVariant/47080005861662',
        //        quantity: 1,
        //        customAttributes: [{ key: "Microsite", value: "Catchphrase" }]
        //    }],
        //}
        //client.checkout.create(input).then((checkout) => {
        //    location.href = checkout.webUrl;
        //});

        location.href = "https://www.gingerfox.co.uk/products/official-catchphrase-say-what-you-see-special-edition-card-game";
    });

    $("#BuyNowBtn").click(function () {
        //const input = {
        //    lineItems: [{
        //        variantId: 'gid://shopify/ProductVariant/47080005861662',
        //        quantity: 1,
        //        customAttributes: [{ key: "Microsite", value: "Catchphrase" }]
        //    }]
        //}
        //client.checkout.create(input).then((checkout) => {
        //    location.href = checkout.webUrl;
        //});

        location.href = "https://www.gingerfox.co.uk/products/official-catchphrase-say-what-you-see-special-edition-card-game";
    });
})
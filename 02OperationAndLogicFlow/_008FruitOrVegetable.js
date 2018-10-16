function sorter(food) {

    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon',
        'grapes', 'peach'];
    let vegetable = ['tomato', 'cucumber', 'pepper', 'onion',
        'garlic', 'parsley'];

    if (fruits.includes(food)) {
        console.log('fruit');
    } else if (vegetable.includes(food)) {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

sorter('banana');
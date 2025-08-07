
function JSXExamples(){
    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'Somchai'
    const age = 25

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'thanayod',
        lastName: 'rattanasureeroj',
        age: 20,
        hobbles: ['Game', 'Music', 'Sleep']
    };

    const formatName = (user) => {
        return '{user.firstName} {user.lastName}';
    }
    const isLoggedIn = true;
    const hasNotification = 3;

    return(
        <div className = "jsx-examples">
            <h1>JSX Example</h1>
            <section>
                <h2>Show Information</h2>
                {greeting}
                <p>Hello {name} age{age} years</p>
                <p>This year is {currentYear}</p>
                <p>Full Name: {formatName(user)}</p>
            </section>

            <section>
                <h2>Attribute in JSX</h2>
                <div className = "card">
                    <p className = "text-primary">Use className instead class</p>
                </div>
                <button>
                    onClick={() => alert('Button Clicked')}
                    onMouseEnter={() => console.log('Mouse Entered')}

                    Hover me or Click me!
                </button>
                
            <div style={{
                backgroundColor: '#E8F5E8',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '10px'
            }}>
                <p style={{color: '#2D4A2B', fontWeight: 'bold' }}>
                    inline style use object
                </p>

            </div>
            </section>
            
        <section>
            <h2>Condtional Rendering</h2>
            <p> status: {isLoggedIn ? 'online' : 'offline'}</p>
            {hasNotification > 0 && (
                <div className = "notification">
                        You have a notification {hasNotification} list
                </div>
            )}

            {(() => {
                if (user.age >= 18) {
                    return <p> you are an adult </p>;
                } else {
                    return <p>You are not yet of legal age.</p>;
                }
            })()}

        </section>
        <section>
            <h3>Product list</h3>
            {[
                        { id: 1, name: 'book', price: 150, inStock: true },
                        { id: 2, name: 'tablet', price: 15000, inStock: true },
                        { id: 3, name: 'computer', price: 129000, inStock: false }
                    ].map(product => (
                        <div>
                            {product.name}
                             - {product.price.toLocaleString()}
                            
                                {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                        </div>
                    ))}
        </section>
        </div>
    )

}

export default JSXExamples
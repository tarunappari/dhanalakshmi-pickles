# Product Store Documentation

This directory contains the Zustand store for managing product data in the application.

## Files

- `productStore.js` - Main Zustand store for product management
- `../hooks/useProducts.js` - Custom hook for easier store usage

## Store Structure

### State
- `products: []` - Array of product objects
- `currentProduct: null` - Single product object for detail views
- `loading: boolean` - Loading state for products list API calls
- `productLoading: boolean` - Loading state for single product API calls
- `error: string | null` - Error message if API call fails

### Actions
- `fetchProducts()` - Fetch products from Shopify API
- `fetchSingleProduct(productId)` - Fetch single product by Shopify ID
- `fetchProductByHandle(handle)` - Fetch single product by URL handle/slug
- `setProducts(products)` - Set products array
- `setCurrentProduct(product)` - Set current product for detail view
- `addProduct(product)` - Add a single product
- `removeProduct(productId)` - Remove product by ID
- `updateProduct(productId, updatedProduct)` - Update existing product
- `clearProducts()` - Clear all products
- `getProductById(productId)` - Get product by ID
- `searchProducts(searchTerm)` - Search products by title/description/tags
- `setLoading(loading)` - Set loading state
- `setError(error)` - Set error message
- `clearError()` - Clear error message

## Usage Examples

### Basic Usage (Direct Store Access)

```jsx
import useProductStore from '@/lib/store/productStore';

const MyComponent = () => {
  const { products, loading, error, fetchProducts } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
```

### Using Custom Hook (Recommended)

```jsx
import { useProducts } from '@/lib/hooks/useProducts';

const MyComponent = () => {
  const {
    products,
    loading,
    error,
    fetchProducts,
    hasProducts,
    productCount
  } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <p>Total products: {productCount}</p>
      {hasProducts && (
        <div>
          {products.map(product => (
            <div key={product.id}>{product.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
```

### Single Product Usage

```jsx
import { useProducts } from '@/lib/hooks/useProducts';

const ProductDetailPage = ({ productId, handle }) => {
  const {
    currentProduct,
    productLoading,
    error,
    fetchSingleProduct,
    fetchProductByHandle
  } = useProducts();

  useEffect(() => {
    // Fetch by ID
    if (productId) {
      fetchSingleProduct(productId);
    }
    // Or fetch by handle (URL slug)
    else if (handle) {
      fetchProductByHandle(handle);
    }
  }, [productId, handle, fetchSingleProduct, fetchProductByHandle]);

  if (productLoading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentProduct) return <div>Product not found</div>;

  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <p>{currentProduct.description}</p>
      <div>
        {currentProduct.images.edges.map(imageEdge => (
          <img
            key={imageEdge.node.id}
            src={imageEdge.node.url}
            alt={currentProduct.title}
          />
        ))}
      </div>
      <div>
        {currentProduct.variants.edges.map(variantEdge => (
          <div key={variantEdge.node.id}>
            <span>{variantEdge.node.title}</span>
            <span>{variantEdge.node.price.amount} {variantEdge.node.price.currencyCode}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Search Functionality

```jsx
import { useProducts } from '@/lib/hooks/useProducts';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchProducts } = useProducts();
  
  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = searchProducts(term);
    // Use results...
  };
  
  return (
    <input 
      type="text"
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search products..."
    />
  );
};
```

### Error Handling

```jsx
import { useProducts } from '@/lib/hooks/useProducts';

const MyComponent = () => {
  const { error, clearError, fetchProducts } = useProducts();
  
  const handleRetry = () => {
    clearError();
    fetchProducts();
  };
  
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );
  }
  
  // Rest of component...
};
```

## Environment Variables Required

Make sure these environment variables are set in your `.env.local` file:

```
NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN=your-shop.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
```

## Features

- ✅ Automatic error handling with detailed error messages
- ✅ Loading states for better UX
- ✅ Search functionality across title, description, and tags
- ✅ CRUD operations for future extensibility
- ✅ Axios integration with timeout and error handling
- ✅ Environment variable validation
- ✅ Custom hook for cleaner component code
- ✅ TypeScript-friendly (can be easily converted)

## API Integration

The store uses Axios to make HTTP requests to the Shopify Storefront API. It includes:

- Request timeout (10 seconds)
- Comprehensive error handling
- GraphQL query support
- Response validation
- Environment variable checks

## Best Practices

1. Use the custom hook `useProducts` instead of direct store access
2. Always handle loading and error states in your components
3. Call `fetchProducts()` in useEffect when component mounts
4. Use `clearError()` before retrying failed requests
5. Implement proper error boundaries for production apps

using ServerForReact.Model;
using ServerForReact.Repositories.Interfaces;

namespace ServerForReact.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly List<Product> products = [];

        public ProductRepository()
        {
            products.AddRange(
            [
                new Product{Id =1, Name = "iPhone 15", Description = "Latest Apple smartphone with A16 Bionic chip" },
                new Product{Id = 2, Name = "Samsung Galaxy S23", Description = "Android flagship with Snapdragon 8 Gen 2"},
                new Product{Id = 3, Name = "MacBook Pro 14\"", Description = "Powerful laptop with M2 Pro chip and Retina display"},
                new Product{ Id = 4, Name = "Sony WH-1000XM5", Description = "Premium noise-cancelling wireless headphones"},
                new Product{Id = 5, Name = "Logitech MX Master 3", Description = "Ergonomic wireless mouse for productivity"},
                new Product{Id = 6, Name = "Dell XPS 15", Description = "High-performance laptop with 4K OLED display"},
                new Product{Id = 7, Name = "Apple Watch Series 9", Description = "Smartwatch with ECG and blood oxygen monitoring"},
                new Product{Id = 8, Name = "Bose QuietComfort 45", Description = "Noise-cancelling headphones with great sound"},
                new Product{Id = 9, Name = "Nintendo Switch OLED", Description = "Gaming console with 7-inch OLED screen"},
                new Product{Id = 10, Name = "Amazon Echo Dot (5th Gen)", Description = "Smart speaker with Alexa voice control"}
            ]);
        }

        public void Add(Product product)
        {
            products.Add(product);
        }
        public void Remove(int id)
        {
            var product = products.First(p => p.Id == id);
            products.Remove(product);
        }
        public void Update(Product editableproduct)
        {
            var product = products.First(p => p.Id == editableproduct.Id);
            product.Name = editableproduct.Name;
            product.Description = editableproduct.Description;
        }
        public Product GetById(int id)
        {
            var product = products.First(p => p.Id == id);
            return product;
        }

        public IEnumerable<Product> GetAll()
        {
            return products;
        }

        public IEnumerable<Product> GetRange(int skip, int take)
        {
            return products.Skip(skip)
                .Take(take);
        }
    }
}

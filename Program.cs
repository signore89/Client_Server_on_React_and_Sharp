using ServerForReact.Repositories;
using ServerForReact.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddSingleton<IProductRepository, ProductRepository>();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{

    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")// ���������� ������� ��� ������ �������� CORS(������ ������� � ������� � ����� ������)
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
//builder.Services.AddOpenApi();

var app = builder.Build();



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors();

app.Run();

using TodoStore.DB;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

// Todo routes
app.MapGet("/todos", () => TodoDB.GetTodos());
app.MapGet("/todos/{id}", (int id) => TodoDB.GetTodoById(id));
app.MapPost("/todos", (Todo td) => TodoDB.CreateTodo(td));
app.MapPut("/todos", (Todo td) => TodoDB.UpdateTodo(td));
app.MapDelete("/todos/{id}", (int id) => TodoDB.RemoveTodo(id));

app.Run();

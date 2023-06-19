namespace TodoStore.DB;
public class Todo
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public bool IsCompleted { get; set; }
}


public class TodoDB
{
    // In-memory database for simplicity
    private static List<Todo> _todos = new List<Todo>()
    {
        new Todo { Id = 1, Title = "Buy milk", IsCompleted = false },
        new Todo { Id = 2, Title = "Buy eggs", IsCompleted = false },
        new Todo { Id = 3, Title = "Buy bread", IsCompleted = true },
    };

    public static List<Todo> GetTodos() => _todos;

    public static Todo? GetTodoById(int id) => _todos.SingleOrDefault(t => t.Id == id);

    public static Todo CreateTodo(Todo td)
    {
        _todos.Add(td);
        return td;
    }

    public static Todo? UpdateTodo(Todo td)
    {
        var pendingTodo = _todos.SingleOrDefault(t => t.Id == td.Id);
        if (pendingTodo != null)
        {
            pendingTodo.Title = td.Title;
            pendingTodo.IsCompleted = td.IsCompleted;
        }
        return pendingTodo;
    }
    public static void RemoveTodo(int id)
    {
        var pendingTodo = _todos.SingleOrDefault(t => t.Id == id);
        if (pendingTodo != null)
        {
            _todos.Remove(pendingTodo);
        }
    }
};



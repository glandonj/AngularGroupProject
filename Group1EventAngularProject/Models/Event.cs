using System;
using System.Collections.Generic;

namespace Group1EventAngularProject.Models;

public partial class Event
{
    public int Id { get; set; }

    public string? Category { get; set; }

    public string? Name { get; set; }

    public DateTime? Date { get; set; }

    public string? Location { get; set; }

    public virtual ICollection<Favorite> Favorites { get; } = new List<Favorite>();
}

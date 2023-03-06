using System;
using System.Collections.Generic;

namespace Group1EventAngularProject.Models;

public partial class Favorite
{
    public int Id { get; set; }

    public string? UserName { get; set; }

    public int EventsId { get; set; }

    public virtual Event? Events { get; set; }
}

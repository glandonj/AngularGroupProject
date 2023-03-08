using System;
using System.Collections.Generic;

namespace Group1EventAngularProject.Models;

public partial class Favorite
{
    public int Id { get; set; }

    public string? UserName { get; set; }

    public int EventsId { get; set; }
    [System.Text.Json.Serialization.JsonIgnore]
    public virtual Event? Events { get; set; }
}

using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Group1EventAngularProject.Models;

public partial class EventDbContext : DbContext
{
    public EventDbContext()
    {
    }

    public EventDbContext(DbContextOptions<EventDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        //=> optionsBuilder.UseSqlServer("Server=localhost,1433; Initial Catalog=EventDb; User ID=SA; Password=EnterPasswordHere1; TrustServerCertificate=true;");
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=EventDB;Trusted_Connection=SSPI;Encrypt=false;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Events__3214EC07B588CA0B");

            entity.Property(e => e.Category).HasMaxLength(250);
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Location).HasMaxLength(500);
            entity.Property(e => e.Name).HasMaxLength(250);
        });

        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC27BE603ED3");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EventsId).HasColumnName("Events_Id");
            entity.Property(e => e.UserName).HasMaxLength(255);

            entity.HasOne(d => d.Events).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.EventsId)
                .HasConstraintName("FK__Favorites__Event__398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

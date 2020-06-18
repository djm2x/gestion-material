﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

namespace apps.Migrations
{
    [DbContext(typeof(MyContext))]
    partial class MyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3");

            modelBuilder.Entity("Models.Affectation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Action")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int>("IdAgentSi")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdCollaborateur")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdEmplacement")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdEquipement")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("IdAgentSi");

                    b.HasIndex("IdCollaborateur");

                    b.HasIndex("IdEmplacement");

                    b.HasIndex("IdEquipement");

                    b.ToTable("Affectations");
                });

            modelBuilder.Entity("Models.Categorie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Ordinateur",
                            Nom = "DESKTOP"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Ordinateur",
                            Nom = "LAPTOP"
                        });
                });

            modelBuilder.Entity("Models.Chat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int?>("IdCollaboratteur")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdSender")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdTicketSupport")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Message")
                        .HasColumnType("TEXT");

                    b.Property<string>("SenderName")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Vu")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("IdCollaboratteur");

                    b.HasIndex("IdSender");

                    b.HasIndex("IdTicketSupport");

                    b.ToTable("Chats");
                });

            modelBuilder.Entity("Models.Constucteur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Constucteurs");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Hewlett-Packard",
                            Nom = "HP"
                        },
                        new
                        {
                            Id = 2,
                            Description = "DELL",
                            Nom = "DELL"
                        },
                        new
                        {
                            Id = 3,
                            Description = "TOSHIBA",
                            Nom = "TOSHIBA"
                        },
                        new
                        {
                            Id = 4,
                            Description = "SHARP",
                            Nom = "SHARP"
                        },
                        new
                        {
                            Id = 5,
                            Description = "CANON",
                            Nom = "CANON"
                        },
                        new
                        {
                            Id = 6,
                            Description = "CISCO",
                            Nom = "CISCO"
                        },
                        new
                        {
                            Id = 7,
                            Description = "FORTIGATE",
                            Nom = "FORTIGATE"
                        },
                        new
                        {
                            Id = 8,
                            Description = "APPLE",
                            Nom = "APPLE"
                        },
                        new
                        {
                            Id = 9,
                            Description = "SONY",
                            Nom = "SONY"
                        },
                        new
                        {
                            Id = 10,
                            Description = "ORAY",
                            Nom = "ORAY"
                        },
                        new
                        {
                            Id = 11,
                            Description = "EPSON",
                            Nom = "EPSON"
                        },
                        new
                        {
                            Id = 12,
                            Description = "BROTHER",
                            Nom = "BROTHER"
                        },
                        new
                        {
                            Id = 13,
                            Description = "UNO",
                            Nom = "UNO"
                        },
                        new
                        {
                            Id = 14,
                            Description = "IBM",
                            Nom = "IBM"
                        },
                        new
                        {
                            Id = 15,
                            Description = "APC",
                            Nom = "APC"
                        },
                        new
                        {
                            Id = 16,
                            Description = "SAMSUNG",
                            Nom = "SAMSUNG"
                        },
                        new
                        {
                            Id = 17,
                            Description = "POLYCOM",
                            Nom = "POLYCOM"
                        },
                        new
                        {
                            Id = 18,
                            Description = "ZEBRA",
                            Nom = "ZEBRA"
                        },
                        new
                        {
                            Id = 19,
                            Description = "HONEYWELL",
                            Nom = "HONEYWELL"
                        },
                        new
                        {
                            Id = 20,
                            Description = "LG",
                            Nom = "LG"
                        });
                });

            modelBuilder.Entity("Models.Departement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Etage")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Departements");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Etage = "E1",
                            Nom = "DIPA-RABAT"
                        },
                        new
                        {
                            Id = 2,
                            Etage = "E4",
                            Nom = "DIPE-RABAT"
                        },
                        new
                        {
                            Id = 3,
                            Etage = "E4",
                            Nom = "DRSI-RABAT"
                        },
                        new
                        {
                            Id = 4,
                            Etage = "E4",
                            Nom = "CENTRE"
                        });
                });

            modelBuilder.Entity("Models.Emplacement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CodeEmplacement")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<int>("IdDepartement")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("IdDepartement");

                    b.ToTable("Emplacements");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CodeEmplacement = "ANDA/R/E4/B01",
                            Description = "BUREAU DIRECTION E4",
                            IdDepartement = 2
                        },
                        new
                        {
                            Id = 2,
                            CodeEmplacement = "ANDA/R/E4/B02",
                            Description = "BUREAU ASSISTANAT DE DIRECTION",
                            IdDepartement = 2
                        },
                        new
                        {
                            Id = 3,
                            CodeEmplacement = "ANDA/R/E4/B03",
                            Description = "BUREAU ASSISTANAT TRESORIER PAYEUR",
                            IdDepartement = 3
                        },
                        new
                        {
                            Id = 4,
                            CodeEmplacement = "ANDA/R/E4/OS6",
                            Description = "PLATEAU SSI",
                            IdDepartement = 4
                        },
                        new
                        {
                            Id = 5,
                            CodeEmplacement = "ANDA/R/E4/OS4",
                            Description = "PLATEAU SAMG",
                            IdDepartement = 3
                        },
                        new
                        {
                            Id = 6,
                            CodeEmplacement = "ANDA/R/E4/OS5",
                            Description = "PLATEAU SBC",
                            IdDepartement = 1
                        },
                        new
                        {
                            Id = 7,
                            CodeEmplacement = "ANDA/R/E4/OS2",
                            Description = "PLATEAU SRH",
                            IdDepartement = 1
                        });
                });

            modelBuilder.Entity("Models.Equipement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateAchat")
                        .HasColumnType("TEXT");

                    b.Property<string>("EtatActuel")
                        .HasColumnType("TEXT");

                    b.Property<int>("IdCategorie")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdConstucteur")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdFournisseur")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdStatut")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Model")
                        .HasColumnType("TEXT");

                    b.Property<string>("NInventaire")
                        .HasColumnType("TEXT");

                    b.Property<string>("NSerie")
                        .HasColumnType("TEXT");

                    b.Property<int>("PrixUnitaireHT")
                        .HasColumnType("INTEGER");

                    b.Property<string>("RefAchat")
                        .HasColumnType("TEXT");

                    b.Property<string>("Remarques")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("IdCategorie");

                    b.HasIndex("IdConstucteur");

                    b.HasIndex("IdFournisseur");

                    b.HasIndex("IdStatut");

                    b.ToTable("Equipements");
                });

            modelBuilder.Entity("Models.EquipementInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("InfoSystemeHtml")
                        .HasColumnType("TEXT");

                    b.Property<string>("NSerie")
                        .HasColumnType("TEXT");

                    b.Property<string>("SoftwareHtml")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("EquipementInfos");
                });

            modelBuilder.Entity("Models.Fonction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Fonctions");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Nom = "CHEF DE DEPARTEMENT"
                        },
                        new
                        {
                            Id = 2,
                            Nom = "CHEF DE SERVICE"
                        },
                        new
                        {
                            Id = 3,
                            Nom = "ASSISTANT"
                        },
                        new
                        {
                            Id = 4,
                            Nom = "CADRE"
                        });
                });

            modelBuilder.Entity("Models.Fournisseur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Fax")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.Property<string>("Tel")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Fournisseurs");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "email1@angular.io",
                            Fax = "null",
                            Nom = "BUCLINTEC",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 2,
                            Email = "email2@angular.io",
                            Fax = "null",
                            Nom = "PC MEMORIA",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 3,
                            Email = "email3@angular.io",
                            Fax = "null",
                            Nom = "BESTMARK",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 4,
                            Email = "email4@angular.io",
                            Fax = "null",
                            Nom = "COD2I",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 5,
                            Email = "email5@angular.io",
                            Fax = "null",
                            Nom = "REPER",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 6,
                            Email = "email6@angular.io",
                            Fax = "null",
                            Nom = "UFP MAROC",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 7,
                            Email = "email7@angular.io",
                            Fax = "null",
                            Nom = "ADN SYSTEM",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 8,
                            Email = "email8@angular.io",
                            Fax = "null",
                            Nom = "ETCE INFO",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 9,
                            Email = "email9@angular.io",
                            Fax = "null",
                            Nom = "CBI",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 10,
                            Email = "email10@angular.io",
                            Fax = "null",
                            Nom = "ALPHA BUREAU",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 11,
                            Email = "email11@angular.io",
                            Fax = "null",
                            Nom = "PLANET TV SAT",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 12,
                            Email = "email12@angular.io",
                            Fax = "null",
                            Nom = "LATCO",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 13,
                            Email = "email13@angular.io",
                            Fax = "null",
                            Nom = "SESA",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 14,
                            Email = "email14@angular.io",
                            Fax = "null",
                            Nom = "TOP INVEST RYAD",
                            Tel = "null"
                        },
                        new
                        {
                            Id = 15,
                            Email = "email15@angular.io",
                            Fax = "null",
                            Nom = "SHOP BUSINESS AND TECHNOLOGIE",
                            Tel = "null"
                        });
                });

            modelBuilder.Entity("Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "admin"
                        },
                        new
                        {
                            Id = 2,
                            Name = "agentSi"
                        },
                        new
                        {
                            Id = 3,
                            Name = "user"
                        },
                        new
                        {
                            Id = 4,
                            Name = "financier"
                        });
                });

            modelBuilder.Entity("Models.Service", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdDepartement")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("IdDepartement");

                    b.ToTable("Services");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            IdDepartement = 1,
                            Nom = "DG/"
                        },
                        new
                        {
                            Id = 2,
                            IdDepartement = 2,
                            Nom = "ANDA"
                        },
                        new
                        {
                            Id = 3,
                            IdDepartement = 3,
                            Nom = "DIPA/"
                        },
                        new
                        {
                            Id = 4,
                            IdDepartement = 4,
                            Nom = "DIPE/"
                        });
                });

            modelBuilder.Entity("Models.Statut", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Statuts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "null",
                            Nom = "Déplacement "
                        },
                        new
                        {
                            Id = 2,
                            Description = "null",
                            Nom = "Local"
                        });
                });

            modelBuilder.Entity("Models.TicketSupport", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateCreation")
                        .HasColumnType("TEXT");

                    b.Property<int>("IdCollaborateur")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsClosed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Priorite")
                        .HasColumnType("TEXT");

                    b.Property<string>("Question")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("IdCollaborateur");

                    b.ToTable("TicketSupports");
                });

            modelBuilder.Entity("Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CodeOfVerification")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailVerified")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("IdFonction")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdRole")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("IdService")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsActive")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Matricule")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nom")
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .HasColumnType("TEXT");

                    b.Property<string>("Prenom")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("IdFonction");

                    b.HasIndex("IdRole");

                    b.HasIndex("IdService");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CodeOfVerification = "",
                            Email = "admin@angular.io",
                            EmailVerified = true,
                            IdFonction = 1,
                            IdRole = 1,
                            IdService = 1,
                            IsActive = true,
                            Matricule = "730533",
                            Nom = "Mourabit",
                            Password = "123",
                            Prenom = "mohamed"
                        },
                        new
                        {
                            Id = 2,
                            CodeOfVerification = "",
                            Email = "agentSI@angular.io",
                            EmailVerified = true,
                            IdFonction = 2,
                            IdRole = 2,
                            IdService = 2,
                            IsActive = true,
                            Matricule = "1042706",
                            Nom = "Hicham",
                            Password = "123",
                            Prenom = "Amakhlouf"
                        },
                        new
                        {
                            Id = 3,
                            CodeOfVerification = "",
                            Email = "user@angular.io",
                            EmailVerified = true,
                            IdFonction = 3,
                            IdRole = 3,
                            IdService = 3,
                            IsActive = true,
                            Matricule = "1059644",
                            Nom = "mehdi",
                            Password = "123",
                            Prenom = "tamika"
                        },
                        new
                        {
                            Id = 4,
                            CodeOfVerification = "",
                            Email = "financier@angular.io",
                            EmailVerified = true,
                            IdFonction = 4,
                            IdRole = 2,
                            IdService = 4,
                            IsActive = true,
                            Matricule = "1059683",
                            Nom = "yassin",
                            Password = "123",
                            Prenom = "fathi"
                        });
                });

            modelBuilder.Entity("Models.Affectation", b =>
                {
                    b.HasOne("Models.User", "AgentSi")
                        .WithMany("AgentSiAffectations")
                        .HasForeignKey("IdAgentSi")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.User", "Collaborateur")
                        .WithMany("CollaborateurAffectations")
                        .HasForeignKey("IdCollaborateur")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.Emplacement", "Emplacement")
                        .WithMany("EmplacementAffectations")
                        .HasForeignKey("IdEmplacement")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.Equipement", "Equipement")
                        .WithMany("EquipementAffectations")
                        .HasForeignKey("IdEquipement")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();
                });

            modelBuilder.Entity("Models.Chat", b =>
                {
                    b.HasOne("Models.User", "Receiver")
                        .WithMany("ReceiverChats")
                        .HasForeignKey("IdCollaboratteur")
                        .OnDelete(DeleteBehavior.NoAction);

                    b.HasOne("Models.User", "Sender")
                        .WithMany("SenderChats")
                        .HasForeignKey("IdSender")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.TicketSupport", "TicketSupport")
                        .WithMany("TicketSupportChats")
                        .HasForeignKey("IdTicketSupport")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Models.Emplacement", b =>
                {
                    b.HasOne("Models.Departement", "Departement")
                        .WithMany("DepartementEmplacements")
                        .HasForeignKey("IdDepartement")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();
                });

            modelBuilder.Entity("Models.Equipement", b =>
                {
                    b.HasOne("Models.Categorie", "Categorie")
                        .WithMany("CategorieEquipements")
                        .HasForeignKey("IdCategorie")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.Constucteur", "Constucteur")
                        .WithMany("ConstucteurEquipements")
                        .HasForeignKey("IdConstucteur")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.Fournisseur", "Fournisseur")
                        .WithMany("FournisseurEquipements")
                        .HasForeignKey("IdFournisseur")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.Statut", "Statut")
                        .WithMany("StatutEquipements")
                        .HasForeignKey("IdStatut")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();
                });

            modelBuilder.Entity("Models.Service", b =>
                {
                    b.HasOne("Models.Departement", "Departement")
                        .WithMany("DepartementServices")
                        .HasForeignKey("IdDepartement")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();
                });

            modelBuilder.Entity("Models.TicketSupport", b =>
                {
                    b.HasOne("Models.User", "Collaborateur")
                        .WithMany("CollaborateurTicketSupports")
                        .HasForeignKey("IdCollaborateur")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();
                });

            modelBuilder.Entity("Models.User", b =>
                {
                    b.HasOne("Models.Fonction", "Fonction")
                        .WithMany("FonctionCollaborateurs")
                        .HasForeignKey("IdFonction")
                        .OnDelete(DeleteBehavior.NoAction);

                    b.HasOne("Models.Role", "Role")
                        .WithMany("RoleUsers")
                        .HasForeignKey("IdRole")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Models.Service", "Service")
                        .WithMany("ServiceCollaborateurs")
                        .HasForeignKey("IdService")
                        .OnDelete(DeleteBehavior.NoAction);
                });
#pragma warning restore 612, 618
        }
    }
}

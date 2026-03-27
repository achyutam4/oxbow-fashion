    import { useNavigate } from "react-router-dom";
    import "./ViewByCategory.css"

    import sarees from '/sarees.avif';
    import salwarsuits from '/salwar-suits.jpg';
    import lehengas from '/lehengas.webp';
    import kurties from '/krutiss.webp';
    import dupatta from '/dupatta.avif';
    import anarkali from '/anarkali.webp';
    import gowns from '/gowns.avif';
    import ethnicsets from '/ethnic-sets.avif';    

    const categories = [
    {
        name: "Sarees", 
        image: sarees,
        path: "sarees",
    },
      {
        name: "Anarkali", 
        image: anarkali,
        path: "anarkali",
    },

      {
        name: "Kurtis", 
        image: kurties,
        path: "kurtis",
    },

      {
        name: "Salwar Suits", 
        image: salwarsuits,
        path: "salwar-suits",
    },

      {
        name: "Dupatta", 
        image: dupatta,
        path: "dupatta",
    },

      {
        name: "Lehengas", 
        image: lehengas,
        path: "Lehengas",
    },
    
      {
        name: "Gowns", 
        image: gowns,
        path: "gowns",
    },
    
      {
        name: "Ethnic Sets", 
        image: ethnicsets,
        path: "ethnicsets",
    },
    ]

    function ViewByCategory() {
        const navigate = useNavigate();
      
        return(
            <section className="category-section">
                <h2 className="category-title">View By Categories</h2>

                <div className="category-grid">
                    {categories.map((category) =>(
                        <div
                        key={category.name}
                        className="category-card"
                        onClick={() => navigate(`/category/${category.path}`)}
                        >
                            <img src={category.image} alt={category.name} loading="lazy"/>
                            <div className="category-overlay">
                                <h3>{category.name}</h3>
                            </div>  
                          </div>
                    ))} 
                </div>
            </section>  
        );
    }


    export default ViewByCategory;
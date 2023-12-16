import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar__categories">
            <div className="category__title">Категории</div>
            <div className="categories">
                <div className="categories__item">
                    <input id='choose-category-1' name='choose-category' type="radio"/>
                    <label htmlFor="choose-category-1">Выбрать все</label> 
                </div>
                <div className="categories__item">
                    <input id='choose-category-2' name='choose-category' type="radio"/>
                    <label htmlFor="choose-category-2">Платья</label> 
                </div>
                <div className="categories__item">
                    <input id='choose-category-3' name='choose-category' type="radio"/>
                    <label htmlFor="choose-category-3">Вечерние</label>
                </div>
                <div className="categories__item">
                    <input id='choose-category-4' name='choose-category' type="radio"/>
                    <label htmlFor="choose-category-4">Свадебные</label>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

class TeachersController < ApplicationController
  def index
    # redirect_to :"#{RAILS_ROOT}/public"
  end

  def show
    render "<div id='badges' class='container'>
    <div class='logo'>
      <h1> SPA Badge </h1>
    </div>
    <h1>Words To Be Remembered By</h1>
    <div class='show-user'>
      <h2> Walker's Badges </h2>

      <div id='1' class='slogan'>
        <div class='body'>1) DBC Guru</div>
        <div class='vote-on'>
          <form action='#'>
            <input type='hidden' name='slogan_id' value=1>
            <input type='hidden' name='vote_type' value='up'>
            <button class='up' type='submit' name='submit'>
              <img src='img/upvote.gif' alt='upvote_image' />
            </button>
          </form>
        </div>
        <div class='vote-on'>
          <form action='#'>
            <input type='hidden' name='slogan_id' value=1>
            <input type='hidden' name='vote_type' value='down'>
            <button class='down' type='submit' name='submit'>
                <img src='img/downvote.gif' alt='downvote_image' />
            </button>
          </form>
        </div>

        <div class='points'>
          (25 points)
        </div>
      </div>

      <div id='2' class='slogan'>
        <div class='body'>2) Most likely to do a handstand</div>
        <div class='vote-on'>
          <form action='#'>
            <input type='hidden' name='slogan_id' value=1>
            <input type='hidden' name='vote_type' value='up'>
            <button class='up' type='submit' name='submit'>
              <img src='img/upvote.gif' alt='upvote_image' />
            </button>
          </form>
        </div>
        <div class='vote-on'>
          <form action='#'>
            <input type='hidden' name='slogan_id' value=1>
            <input type='hidden' name='vote_type' value='down'>
            <button class='down' type='submit' name='submit'>
                <img src='img/downvote.gif' alt='downvote_image' />
            </button>
          </form>
        </div>

        <div class='points'>
          (15 points)
        </div>
      </div>

      <div class='add-badge'>
        <h3> Add a Badge: </h3>
        <form action='#'>
          <input type='hidden' name='user_id' value='5' />
          <input type='text' name='content' />
          <input type='image' src='img/add_button.png' alt='Add Slogan' />
        </form>
      </div>

    </div>

    <div class='nav'>
      <span class='nav-link'>
        <a href='spa-badge.html'> HOME </a>
      </span>
    </div>
  </div>", layout: false
  end

  def edit

  end

  def delete

  end
end

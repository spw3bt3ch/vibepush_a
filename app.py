from flask import Flask, render_template
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'vibepush-africa-secret-key-2026')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/plans')
def plans():
    music_plans = [
        {
            'name': 'Starter Push',
            'price': '₦25,000',
            'price_note': '/ campaign',
            'emoji': '🔥',
            'tagline': 'Ideal for singles / upcoming artists testing visibility.',
            'features': [
                '7 Days Visibility Cycle',
                '3 Story Blasts',
                'Caption + Hashtag Strategy',
                'Link in Bio Feature (7 days)',
                'Great for first-time promo',
            ],
            'badge': None,
            'badge_color': 'blue',
            'highlight': False,
        },
        {
            'name': 'Buzz Push',
            'price': '₦60,000',
            'price_note': '/ campaign',
            'emoji': '⚡',
            'tagline': 'Best for serious artists releasing singles or EPs.',
            'features': [
                '14 Days Visibility Cycle',
                '3 Main Promo Posts',
                '6 Story Blasts',
                '1 Reel/Short repost',
                'Strategic Posting Schedule',
                'Link in Bio Feature (14 days)',
            ],
            'badge': 'Most Popular',
            'badge_color': 'gold',
            'highlight': True,
        },
        {
            'name': 'Premium Push',
            'price': '₦150,000',
            'price_note': '/ campaign',
            'emoji': '🚀',
            'tagline': 'For album releases, major artists, or label-backed projects.',
            'features': [
                '30 Days Visibility Cycle',
                '5 Main Promo Posts',
                'Daily Story Visibility',
                '2 Reel Features',
                'Pinned Feature (7 days)',
                'Priority Posting',
            ],
            'badge': 'Premium',
            'badge_color': 'purple',
            'highlight': False,
        },
    ]

    event_plans = [
        {
            'name': 'Event Promotion Package',
            'price': '₦80,000',
            'price_note': '/ campaign',
            'emoji': '🎪',
            'tagline': 'Events require more urgency.',
            'features': [
                'EVENT BOOST (10–14 Days)',
                '3 Promo Posts',
                '6 Story Blasts',
                'Event Reminder Post',
                'Countdown Strategy',
            ],
            'badge': None,
            'badge_color': 'blue',
            'highlight': False,
        },
        {
            'name': 'Event Dominate',
            'price': '₦180,000',
            'price_note': '/ campaign',
            'emoji': '👑',
            'tagline': 'Events require more urgency.',
            'features': [
                'Event Boost (21 – 30 Days)',
                '5 Promo Posts',
                'Daily Stories',
                '2 Reels',
                'Countdown Campaign',
                'Ticket CTA Strategy',
            ],
            'badge': 'Best for Big Events',
            'badge_color': 'pink',
            'highlight': True,
        },
    ]

    return render_template('plans.html', music_plans=music_plans, event_plans=event_plans)


@app.route('/submit')
def submit():
    return render_template('submit.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)

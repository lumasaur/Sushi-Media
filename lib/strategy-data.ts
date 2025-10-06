import { Strategy } from './types';

/**
 * Complete dataset of 50 marketing strategies across 5 objectives
 * Source: Strategic Marketing Enhancement Framework prioritization matrix
 */
export const strategies: Strategy[] = [
  // OBJECTIVE 1: Bar Sales Growth (10 strategies)
  {
    id: '1.1',
    category: 'bar-sales',
    name: 'Game Day Happy Hour Program',
    description: 'Extended happy hour pricing during all NFL games (Sunday and Monday Night Football) with game day appetizer specials designed for sharing and group ordering.',
    effort: 'low',
    value: 'high',
    rationale: 'Fills traditionally slower Sunday/Monday evenings; leverages existing sports viewing infrastructure; minimal operational change required; 40% increase in Sunday/Monday evening bar sales expected.'
  },
  {
    id: '1.2',
    category: 'bar-sales',
    name: 'Mid-Week "Unwind Wednesday" Happy Hour',
    description: 'Wednesday 4-7 PM extended happy hour targeting corporate professionals with featured Japanese whisky flights, signature cocktail specials, and premium sake tastings.',
    effort: 'minimal',
    value: 'high',
    rationale: 'Addresses mid-week slowdown with simple pricing adjustment; captures post-work professional traffic; no new resources required; 30+ customers during happy hour window target.'
  },
  {
    id: '1.3',
    category: 'bar-sales',
    name: 'Signature Cocktail Development Program',
    description: 'Monthly rotating signature cocktails with Japanese-inspired ingredients, behind-the-scenes creation videos, and bartender spotlights for social media engagement.',
    effort: 'medium',
    value: 'medium',
    rationale: 'Requires bartender creativity and ingredient sourcing; differentiates beverage program; generates social media content opportunities; 35% cocktail sales attachment rate target.'
  },
  {
    id: '1.4',
    category: 'bar-sales',
    name: 'Sports Viewing Experience Enhancement',
    description: 'TV/audio optimization for game viewing, group packages with reserved seating, team spirit promotions, and game day group packages for 4+ people.',
    effort: 'medium',
    value: 'medium',
    rationale: 'May require equipment investment; enhances atmosphere but doesn\'t fundamentally change service model; appeals to specific customer segment; 8+ group reservations per major game day.'
  },
  {
    id: '1.5',
    category: 'bar-sales',
    name: 'Sake Education & Tasting Events',
    description: 'Monthly 90-minute guided sake tastings with small plates pairing at $65pp, featuring sake expert presentations and post-event special pricing on featured bottles.',
    effort: 'medium',
    value: 'medium',
    rationale: 'Requires coordination with distributors; builds sake sales over time; premium pricing offsets operational complexity; 20-25 participants per monthly event target.'
  },
  {
    id: '1.6',
    category: 'bar-sales',
    name: '"Industry Night" Bar Program',
    description: 'Special pricing for restaurant industry workers on slow nights (Sunday or Monday) with business card verification, building word-of-mouth through industry influencers.',
    effort: 'low',
    value: 'medium',
    rationale: 'Simple verification and pricing structure; builds word-of-mouth through industry influencers; leverages empty capacity; 15+ industry professionals weekly target.'
  },
  {
    id: '1.7',
    category: 'bar-sales',
    name: 'Cocktail Flight Program',
    description: 'Tasting flights of 3-4 cocktails in smaller portions for $18-24, encouraging higher total beverage spend with Instagram-worthy presentation.',
    effort: 'low',
    value: 'high',
    rationale: 'Minimal operational change; increases per-customer beverage spend; highly shareable social media content; 25% of bar customers ordering flights target.'
  },
  {
    id: '1.8',
    category: 'bar-sales',
    name: 'Happy Hour Loyalty Punch Card',
    description: 'Digital or physical punch card with rewards after 5 visits, creating customer data for marketing while building visit frequency through gamification.',
    effort: 'low',
    value: 'high',
    rationale: 'Simple tracking system; builds visit frequency; creates customer data for marketing; low cost with high retention impact; 200+ active members within 3 months target.'
  },
  {
    id: '1.9',
    category: 'bar-sales',
    name: 'Bartender Social Media Takeover',
    description: 'Weekly Instagram Stories featuring bartenders preparing signature drinks with ingredient explanations, technique demonstrations, and personality showcase.',
    effort: 'minimal',
    value: 'medium',
    rationale: 'Uses existing staff and social channels; humanizes brand; requires minimal time investment; builds personality connection; 50% engagement increase on takeover days.'
  },
  {
    id: '1.10',
    category: 'bar-sales',
    name: '"Bring a Friend" Bar Promotion',
    description: 'Monthly promotion where existing customers receive 20% off total bar tab when bringing first-time visitors, tracked through simple verbal confirmation.',
    effort: 'minimal',
    value: 'high',
    rationale: 'Extremely low operational complexity; leverages existing customer base for acquisition; tracks easily through verbal confirmation; 30+ new customers monthly target.'
  },

  // OBJECTIVE 2: Lunch Business Growth (10 strategies)
  {
    id: '2.1',
    category: 'lunch',
    name: 'Corporate Office Direct Outreach Campaign',
    description: 'Systematic personal visits to 20-30 office complexes with sample lunch delivery, professional flyers, and complimentary delivery to office managers.',
    effort: 'high',
    value: 'very-high',
    rationale: 'Time-intensive personal selling but generates recurring high-value accounts; builds B2B relationships with compounding returns; 15+ active corporate accounts within 90 days.'
  },
  {
    id: '2.2',
    category: 'lunch',
    name: 'LinkedIn Corporate Lunch Marketing',
    description: 'Targeted LinkedIn posts and ads highlighting business lunch options, with professional dining photography and corporate event testimonials.',
    effort: 'medium',
    value: 'medium',
    rationale: 'Requires content development and ad spend; reaches decision-makers directly; measurable ROI through platform analytics; 25+ LinkedIn-generated lunch inquiries monthly.'
  },
  {
    id: '2.3',
    category: 'lunch',
    name: 'Corporate Lunch Package Development',
    description: '3-4 standardized packages at $15-35 pp with easy ordering: Essential ($15-18), Professional ($22-26), and Executive ($30-35) with 6-person minimum.',
    effort: 'low',
    value: 'high',
    rationale: 'Simplifies decision-making for corporate buyers; minimal operational change; increases average order value through bundling; 40% adoption rate target.'
  },
  {
    id: '2.4',
    category: 'lunch',
    name: 'DoorDash Profile Optimization',
    description: 'Complete platform overhaul with professional photography for all menu items, lunch specials highlighting, and detailed appetizing descriptions.',
    effort: 'medium',
    value: 'very-high',
    rationale: 'One-time photography investment with lasting impact; dramatically improves conversion rate; essential platform visibility driver; 4.8+ star rating maintenance target.'
  },
  {
    id: '2.5',
    category: 'lunch',
    name: 'Lunch-Specific Social Media Campaign',
    description: 'Dedicated lunch promotion content Tuesday-Friday 10 AM-12 PM with daily lunch special features and DoorDash ordering links.',
    effort: 'low',
    value: 'medium',
    rationale: 'Uses existing social media channels; requires consistent content creation; drives immediate ordering behavior; 30% increase in lunch orders from social traffic.'
  },
  {
    id: '2.6',
    category: 'lunch',
    name: '"Lunch Club" Subscription Program',
    description: 'Weekly recurring lunch orders with 10% discount for corporate clients, offering set-it-and-forget-it ordering with automatic delivery schedules.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires coordination and relationship management; creates predictable recurring revenue; reduces acquisition cost over time; 12+ corporate clients target.'
  },
  {
    id: '2.7',
    category: 'lunch',
    name: 'Google My Business Lunch Optimization',
    description: 'Daily lunch special posts and attribute optimization for search visibility, capturing "lunch near me" searches with weekly photo updates.',
    effort: 'minimal',
    value: 'high',
    rationale: 'Extremely low effort for high search visibility impact; captures "lunch near me" searches; free marketing channel; 100+ Google-sourced lunch inquiries monthly.'
  },
  {
    id: '2.8',
    category: 'lunch',
    name: 'Office Park Flyer Distribution',
    description: 'Professional flyers in 15-20 office building lobbies with QR codes for DoorDash ordering, corporate catering contact info, and first order discount.',
    effort: 'low',
    value: 'medium',
    rationale: 'Low-cost physical marketing; requires weekly distribution commitment; supplements digital strategies with tangible presence; 8-10 new corporate accounts target.'
  },
  {
    id: '2.9',
    category: 'lunch',
    name: 'DoorDash Platform Promotions',
    description: 'Strategic promotional tools during peak lunch hours (11:30 AM-1 PM) with $400-600 monthly budget significantly boosting platform visibility.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires promotional budget; significantly boosts platform visibility; drives order volume during critical windows; top 5 ranking in category during lunch hours.'
  },
  {
    id: '2.10',
    category: 'lunch',
    name: 'Corporate Lunch Referral Incentive',
    description: '$50 credit to existing corporate clients for new account referrals that place first order, tracked through simple referral code system.',
    effort: 'minimal',
    value: 'high',
    rationale: 'Nearly zero operational complexity; low customer acquisition cost; leverages satisfied customers as sales force; 5+ new corporate accounts monthly from referrals.'
  },

  // OBJECTIVE 3: Neighborhood Gathering Spot (10 strategies)
  {
    id: '3.1',
    category: 'neighborhood',
    name: 'Apartment Complex Direct Partnership',
    description: 'Formal partnership with Modera/Clarus for resident benefits (15% discount with ID), featured in welcome packets and community newsletters.',
    effort: 'medium',
    value: 'very-high',
    rationale: 'Requires management relationship building; creates captive audience within walking distance; sustainable long-term customer base; 10% resident penetration target.'
  },
  {
    id: '3.2',
    category: 'neighborhood',
    name: '"Welcome to the Neighborhood" Program',
    description: 'Special offer for new residents during first month: complimentary appetizer with first visit or 20% off entire first order.',
    effort: 'low',
    value: 'high',
    rationale: 'Simple offer structure; captures customers at high-intent moment; low cost for first-impression establishment; 30+ new resident customers monthly.'
  },
  {
    id: '3.3',
    category: 'neighborhood',
    name: 'Walkable Distance Marketing Campaign',
    description: '"5-Minute Walk" messaging with geo-targeted social media ads to apartment complex addresses, emphasizing convenience and no-driving-needed accessibility.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires content creation and ad spend; powerful convenience positioning; differentiates from drive-to competitors; 40% increase in Modera/Clarus customer traffic.'
  },
  {
    id: '3.4',
    category: 'neighborhood',
    name: 'Resident Community Events',
    description: 'Monthly "Neighbor Night" with special resident-only pricing, casual social atmosphere, and name tags for neighbor introduction facilitation.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires event planning and execution; builds community loyalty; generates word-of-mouth within target buildings; 50+ apartment residents attending monthly.'
  },
  {
    id: '3.5',
    category: 'neighborhood',
    name: 'Apartment Building Lobby Presence',
    description: 'Professional marketing materials in Modera and Clarus lobby display areas with menu holders, QR codes, and weekly material updates.',
    effort: 'minimal',
    value: 'medium',
    rationale: 'Very low effort with constant visibility; requires relationship maintenance; passive marketing to captive audience; permanent presence in both building lobbies.'
  },
  {
    id: '3.6',
    category: 'neighborhood',
    name: 'Resident Loyalty Program',
    description: 'Special accelerated loyalty card for apartment residents (every 8 visits instead of 10) with early event access and priority reservations.',
    effort: 'low',
    value: 'high',
    rationale: 'Simple program administration; incentivizes repeat visits; differentiates resident benefits from general customers; 150+ active neighborhood loyalty members.'
  },
  {
    id: '3.7',
    category: 'neighborhood',
    name: 'Local Delivery Optimization',
    description: 'Guaranteed 20-minute delivery to apartment complexes with free delivery over $30, emphasizing "faster than getting in your car" convenience.',
    effort: 'low',
    value: 'medium',
    rationale: 'Minor process refinement; leverages proximity advantage; removes friction from ordering decision; 25+ weekly delivery orders to apartment complexes.'
  },
  {
    id: '3.8',
    category: 'neighborhood',
    name: 'Social Media Community Group Engagement',
    description: 'Active participation in resident Facebook groups responding to dining recommendations with special offers and helpful community content.',
    effort: 'minimal',
    value: 'medium',
    rationale: 'Requires regular but minimal time investment; builds organic brand awareness; positions as community member vs. advertiser; top-of-mind recommendation status.'
  },
  {
    id: '3.9',
    category: 'neighborhood',
    name: '"Neighbors Eat Free" Referral Program',
    description: 'Complimentary appetizer when residents bring non-resident friends, tracked through simple resident ID verification.',
    effort: 'minimal',
    value: 'high',
    rationale: 'Extremely simple tracking; turns residents into brand ambassadors; low cost with high acquisition potential; 20+ monthly new customers through resident referrals.'
  },
  {
    id: '3.10',
    category: 'neighborhood',
    name: 'Apartment Complex Outdoor Event Presence',
    description: 'Sampling stations at resident festivals/events with menu distribution and special offer cards, capturing high-intent leads at community gatherings.',
    effort: 'medium',
    value: 'medium',
    rationale: 'Requires event participation coordination; face-to-face relationship building; captures high-intent leads; 40+ new customer contacts per quarterly event.'
  },

  // OBJECTIVE 4: Events Calendar Strategy (10 strategies)
  {
    id: '4.1',
    category: 'events',
    name: 'Competitive Event Calendar Analysis',
    description: 'Systematic tracking of Delicious Heights and Vintage Tavern event schedules to identify open dates and underserved event types.',
    effort: 'low',
    value: 'very-high',
    rationale: 'Minimal effort with strategic impact; prevents direct competition; enables intelligent calendar positioning; zero direct conflicts with major competitor programming.'
  },
  {
    id: '4.2',
    category: 'events',
    name: 'Niche Event Programming Development',
    description: 'Unique events competitors cannot replicate: sake pairing education, Japanese whisky tastings, sushi workshops, and cultural appreciation nights.',
    effort: 'high',
    value: 'high',
    rationale: 'Requires event development and execution capability; creates sustainable differentiation; premium pricing potential; 2-3 unique monthly events with 20+ attendees each.'
  },
  {
    id: '4.3',
    category: 'events',
    name: 'Off-Peak Day Event Programming',
    description: 'Sunday-Wednesday events when competitors are slower: trivia nights, happy hour extensions, special menu tastings.',
    effort: 'medium',
    value: 'high',
    rationale: 'Moderate planning required; fills low-traffic periods; faces less competition for customer attention; 30% capacity increase on weekday evenings.'
  },
  {
    id: '4.4',
    category: 'events',
    name: 'Corporate Event Night Programming',
    description: 'Tuesday or Wednesday "Corporate Networking Night" with professional atmosphere, structured networking, and Somerset County Business Partnership collaboration.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires structured format development; taps underserved B2B segment; builds corporate relationship pipeline; monthly events with 30+ business professionals.'
  },
  {
    id: '4.5',
    category: 'events',
    name: 'Monthly Themed Cultural Celebration',
    description: 'Rotating themes (Ramen Month, Sake Month) with menu integration, social media content series, and special items available only during themed month.',
    effort: 'medium',
    value: 'medium',
    rationale: 'Moderate planning and menu coordination; creates marketing momentum; requires sustained execution commitment; 25% sales increase in featured category during theme months.'
  },
  {
    id: '4.6',
    category: 'events',
    name: 'Sunday Afternoon Family Events',
    description: '4-7 PM family-friendly interactive experiences like sushi-making for kids and family trivia, positioning as family neighborhood gathering spot.',
    effort: 'medium',
    value: 'medium',
    rationale: 'Requires family-appropriate programming; taps different demographic than competitors; builds daytime business; 15+ families attending monthly Sunday events.'
  },
  {
    id: '4.7',
    category: 'events',
    name: 'Seasonal Event Calendar Strategy',
    description: 'Signature seasonal events 2-3 weeks offset from competitor timing: cherry blossom (spring), summer sake festival, autumn harvest menu.',
    effort: 'medium',
    value: 'high',
    rationale: 'Strategic calendar planning required; creates memorable brand moments; captures holiday/seasonal spending; quarterly signature events with 75+ attendees.'
  },
  {
    id: '4.8',
    category: 'events',
    name: 'Local Artist Showcase Series',
    description: 'Monthly rotating artist exhibitions with opening receptions, artist meet-and-greet, and cross-promotional marketing through artist networks.',
    effort: 'low',
    value: 'medium',
    rationale: 'Simple partnership coordination; builds arts community connection; cross-promotional marketing benefit; monthly artist events with 30+ attendees.'
  },
  {
    id: '4.9',
    category: 'events',
    name: 'Educational Workshop Series',
    description: 'Hands-on cooking/beverage workshops ($55-85 pp): sake tasting certification, knife skills basics, sushi rolling classes.',
    effort: 'high',
    value: 'high',
    rationale: 'Requires instructional capability development; premium pricing justifies effort; creates experiential differentiation; quarterly workshops with 12-15 participants, 60% repeat attendance.'
  },
  {
    id: '4.10',
    category: 'events',
    name: 'Community Collaboration Event Calendar',
    description: 'Co-hosted events with non-competing local businesses: wine shops for pairing events, fitness studios for healthy dining nights.',
    effort: 'medium',
    value: 'high',
    rationale: 'Partnership coordination required; shared marketing resources; expands customer reach through partner networks; bi-monthly events, 5+ active business partnerships.'
  },

  // OBJECTIVE 5: DoorDash Business Growth (10 strategies)
  {
    id: '5.1',
    category: 'doordash',
    name: 'DoorDash SEO & Keyword Optimization',
    description: 'Optimize restaurant name, description, and menu items with searchable keywords: "sushi near me," "Japanese delivery," "premium sushi," "fresh sashimi."',
    effort: 'low',
    value: 'high',
    rationale: 'One-time text optimization with lasting visibility impact; free improvement to platform discoverability; first page ranking for "sushi" and "Japanese" in delivery area.'
  },
  {
    id: '5.2',
    category: 'doordash',
    name: 'Professional Food Photography Investment',
    description: 'High-quality photography for every menu item on platform with bright, appetizing, consistent styling and quarterly photo refresh.',
    effort: 'high',
    value: 'very-high',
    rationale: 'Significant upfront cost but dramatic conversion improvement; essential competitive differentiator on visual platform; 40% increase in menu item view-to-order conversion rate.'
  },
  {
    id: '5.3',
    category: 'doordash',
    name: 'Strategic Menu Pricing for Delivery',
    description: 'Delivery-specific pricing accounting for platform fees while remaining competitive, with family packages and combo deals encouraging larger order sizes.',
    effort: 'low',
    value: 'medium',
    rationale: 'Simple pricing adjustment; maintains profitability while staying competitive; requires market analysis; average DoorDash order value of $45+ target.'
  },
  {
    id: '5.4',
    category: 'doordash',
    name: 'DoorDash Promotional Campaign Calendar',
    description: 'Strategic promotional tools during peak ordering times with $400-600 monthly budget significantly boosting visibility and ranking.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires promotional budget and calendar management; significantly boosts platform visibility; 60% increase in DoorDash orders during promotional periods.'
  },
  {
    id: '5.5',
    category: 'doordash',
    name: 'Delivery-Optimized Menu Development',
    description: 'Menu items specifically designed to travel well with compartmentalized containers preventing sogginess and separation.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires recipe development and packaging testing; maintains quality perception; reduces negative reviews; 4.5+ star food quality rating on delivery platforms.'
  },
  {
    id: '5.6',
    category: 'doordash',
    name: 'Review Response & Reputation Management',
    description: 'Systematic 24-hour response to all reviews thanking positive reviews and addressing concerns professionally with issue resolution offers.',
    effort: 'minimal',
    value: 'high',
    rationale: 'Daily 15-minute task; dramatic impact on rating and customer perception; demonstrates commitment to service; 4.7+ overall DoorDash rating with 100+ reviews.'
  },
  {
    id: '5.7',
    category: 'doordash',
    name: 'First-Time Customer Acquisition Campaign',
    description: '"20% off first order" promotions for new customers with conversion focus turning first-time orders into repeat customers.',
    effort: 'medium',
    value: 'high',
    rationale: 'Requires promotional budget and tracking; high-value customer acquisition at controlled cost; measurable conversion; 35% of first-time customers become repeat orderers.'
  },
  {
    id: '5.8',
    category: 'doordash',
    name: 'DoorDash Platform Advertising',
    description: 'Sponsored listing advertising during high-traffic periods with $300-500 monthly budget guaranteeing top-3 placement.',
    effort: 'medium',
    value: 'high',
    rationale: 'Budget requirement; guarantees top-3 placement; drives immediate order volume; top 3 ranking in category during peak ordering times.'
  },
  {
    id: '5.9',
    category: 'doordash',
    name: 'Social Media to DoorDash Conversion',
    description: 'Instagram/Facebook posts with direct DoorDash ordering links in daily food photography with "Order now" call-to-action.',
    effort: 'low',
    value: 'medium',
    rationale: 'Minimal effort link integration; connects social engagement to ordering behavior; measurable attribution; 25% of DoorDash orders attributable to social media traffic.'
  },
  {
    id: '5.10',
    category: 'doordash',
    name: 'Delivery-Exclusive Menu Items',
    description: 'Special dishes available only through DoorDash with "Only available for delivery" messaging creating urgency and platform loyalty.',
    effort: 'medium',
    value: 'medium',
    rationale: 'Menu development and exclusivity marketing required; creates platform loyalty; differentiates from competitors; delivery-exclusive items represent 15% of DoorDash sales.'
  }
];

// Helper functions for data access
export function getStrategiesByCategory(category: Strategy['category']): Strategy[] {
  return strategies.filter(s => s.category === category);
}

export function getQuickWins(): Strategy[] {
  return strategies.filter(s =>
    (s.effort === 'minimal' || s.effort === 'low') &&
    (s.value === 'high' || s.value === 'very-high')
  );
}

export function getHighImpactStrategies(): Strategy[] {
  return strategies.filter(s =>
    s.value === 'very-high' || s.value === 'high'
  );
}

export function getStrategyById(id: string): Strategy | undefined {
  return strategies.find(s => s.id === id);
}

export function getStrategiesByEffort(effort: Strategy['effort']): Strategy[] {
  return strategies.filter(s => s.effort === effort);
}

export function getStrategiesByValue(value: Strategy['value']): Strategy[] {
  return strategies.filter(s => s.value === value);
}

// Statistics
export function getStrategyCount(): number {
  return strategies.length;
}

export function getCategoryCount(): number {
  return new Set(strategies.map(s => s.category)).size;
}

export function getStrategiesByEffortAndValue(
  effort: Strategy['effort'],
  value: Strategy['value']
): Strategy[] {
  return strategies.filter(s => s.effort === effort && s.value === value);
}

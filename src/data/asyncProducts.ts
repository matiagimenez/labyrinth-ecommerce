import { Product } from '../types/Product';
const products = [
	{
		id: 'alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti',
		title: `Alienware M15 R7 
		15.6″ 240hz 
		Core i7 12700H 
		16GB / 512GB 
		RTX 3070Ti`,
		name: `Alienware M15 R7 
		15.6″`,
		category: 'gaming',
		brand: 'Alienware',
		stock: 10,
		price: 1275890,
		priceCurrency: '$',
		enabled: false,
		images: [
			'01-600x600.jpg',
			'02-600x600.jpg',
			'03-600x600.jpg',
			'04-600x600.jpg',
			'05-600x600.jpg',
			'06-600x600.jpg',
			'07-600x600.jpg',
			'08-600x600.jpg',
			'09-600x600.jpg',
		],
		banner: 'banner-alienware-m15-r7.jpg',
		description:
			"Get the edge you need with Alienware Cryo-tech™ cooling technology, incorporating fans with a new configuration and over twice as many blades in a design that's 37.5% thinner than the previous generation. The dual-fan design, prioritizing performance, draws in cool air through the top and bottom vents and expels hot air through the left, right, and rear sides, ensuring an exceptional gaming experience.",
		features: {
			cpu: {
				title: 'Processor',
				text: `Intel Core i7 12700H
			4.7 GHz Performance 6-Core
			3.5 GHz Efficiency 8-Core
			Cores: 14
			Threads: 20`,
			},
			ram: {
				title: 'Memory',
				text: `Capacity: 32GB
			Type: DDR5
			Expandable: 64GB`,
			},
			screen: {
				title: 'Display',
				text: `Size: 15.6″
			Resolution: QHD 2560×1440
			Technology: WVA G-Sync
			Hz: 240Hz`,
			},
			gpu: {
				title: 'Graphics',
				text: `NVIDIA GeForce RTX 3070 Ti
			Video Memory: 8 GB GDDR6
			Switch MUX`,
			},
			storage: {
				title: 'Storage',
				text: `Capacity: 512 GB
			Type: SSD
			Technology: PCIe 4.0 NVMe`,
			},
			connectivity: {
				title: 'Connectivity',
				text: `WiFi 6 802.11AX
			Bluetooth: Yes
			Ethernet: Yes 2500 Mbit/s`,
			},
			os: {
				title: 'Operating System',
				text: 'Windows 11',
			},
			ports: {
				title: 'Ports',
				text: `- 3 x USB Type-A 3.2 Gen 1
			- Type-C port (Thunderbolt™ 4, USB 3.2 Gen 2, DP 1.4,PD)
			- HDMI 2.1
			- RJ-45 Killer E3100 2.5Gbps
			- Headset jack`,
			},
			other: {
				title: 'Other features',
				text: `720p Webcam
			RGB Backlit Keyboard
			AlienFX Lighting
			Cryo-tech`,
			},
			model: {
				title: 'Model',
				text: `Brand: Alienware
			Line: m15 R7
			Model: AWM15R7-7730BLK-PUS`,
			},
			dimensions: {
				title: 'Dimensions and weight',
				text: `35.6 x 27,2 x 2,39 cm
			Weight: 2,42 kg
			Chassis: Plastic`,
			},
			usage: {
				title: 'Recommended use',
				text: 'Design, architecture, photo editing, Rendering, Multimedia, internet, Gaming',
			},
		},
	},
	{
		id: 'apple-macbook-pro-M2-pro-12-core-16gb-512gb-space-gray',
		title: `Apple MacBook Pro 16″ M2 PRO 12 Core 16GB 512GB Space Gray`,
		name: `Apple MacBook Pro 16″`,
		category: 'notebooks',
		brand: 'Apple',
		stock: 5,
		price: 3590890,
		priceCurrency: '$',
		enabled: false,
		images: [
			'01-600x600.webp',
			'02-600x600.webp',
			'03-600x600.webp',
			'04-600x600.webp',
			'05-600x600.webp',
			'06-600x600.webp',
			'07-600x600.webp',
			'08-600x600.webp',
			'09-600x600.webp',
		],
		banner: 'banner-macbook.webp',
		description:
			"The MacBook Pro elevates its performance and efficiency to cosmic levels with the M2 Pro and M2 Max chips. It boasts wild power even when unplugged, with a battery that lasts and lasts. Featuring a stunning Liquid Retina XDR display and all the ports you need, it's undoubtedly a professional laptop like no other",
		features: {
			cpu: {
				title: 'Processor',
				text: `Apple M2 PRO
				Cores: 12`,
			},
			ram: {
				title: 'Memory',
				text: `Capacity: 16GB`,
			},
			screen: {
				title: 'Display',
				text: `Size: 16.2″
				Resolution: XDR 3456 x 2234 px
				Technology:  Mini-LED
				Hz: Apple ProMotion 120hz`,
			},
			gpu: {
				title: 'Graphics',
				text: `APPLE Chip 19 Nucleos
				Neural Engine de 16 Nucleos`,
			},
			storage: {
				title: 'Storage',
				text: `Capacity: 512 GB
			Technology: Apple NVMe`,
			},
			connectivity: {
				title: 'Connectivity',
				text: `WiFi 6E 802.11ax
				Bluetooth: 5.3
			Ethernet: No`,
			},
			os: {
				title: 'Operating System',
				text: `macOS
				Version: Ventura`,
			},
			ports: {
				title: 'Ports',
				text: `3 x Thunderbolt 4 (DP/HDMI/DVI and 100 W Power Delivery)
				Audio Combo
				Card Reader
				Magsafe
				HDMI`,
			},
			other: {
				title: 'Other features',
				text: `Backlit Keyboard
				Force Touch Trackpad
				1080p Webcam
				Fingerprint Reader
				Card Reader
				6 Speakers`,
			},
			model: {
				title: 'Model',
				text: `Brand: Apple
			Line: MacBook Pro 16
			Model: MNW83LL/A`,
			},
			dimensions: {
				title: 'Dimensions and weight',
				text: `35,6 x 24,8 x 1,7 cm
			Weight: 2,15 kg
			Chassis: Aluminio`,
			},
			usage: {
				title: 'Recommended use',
				text: 'Design, Photography, Office tasks, Programming, Video Editing, Architecture, Rendering',
			},
		},
	},
	{
		id: 'msi-pulse-gl76-17-3-144hz-i7-12th-gen-16gb-512gb-rtx-3070-8gb',
		title: `MSI Pulse GL76 
		17.3″ 144hz 
		i7 12th Gen 
		16GB / 512GB 
		RTX 3070 8GB`,
		name: `MSI Pulse GL76 
		17.3″`,
		category: 'gaming',
		brand: 'Alienware',
		stock: 1,
		price: 989890,
		priceCurrency: '$',
		enabled: true,
		images: [
			'01-600x600.jpg',
			'02-600x600.jpg',
			'03-600x600.jpg',
			'04-600x600.jpg',
			'05-600x600.jpg',
			'06-600x600.jpg',
			'07-600x600.jpg',
		],
		banner: 'banner-pulse-GL76.jpg',
		description:
			'The most adaptable to change is the one who survives and evolves. Choose the spirit of the dragon and evolve with the latest GL76 Gaming laptops from MSI equipped with 12th generation Intel® Core ™ i7 processors and the latest GeForce RTX graphics cards designed for stylish gamers. Its 144HZ IPS screen with unprecedented speed and clarity offers you the most vibrant images so you never miss a beat.',
		features: {
			cpu: {
				title: 'Processor',
				text: `Intel® Core i7 12700H
			Speed: 2.30 GHz - 4.60 GHz
			Cores: 14 (Performance 6, Efficient 8)
			Threads: 20`,
			},
			ram: {
				title: 'Memory',
				text: `Capacity: 16GB
			Type: DDR4
			Expandable: 64GB`,
			},
			screen: {
				title: 'Display',
				text: `Size: 17.3"
			Resolution: Full HD
			Technology: IPS
			Hz: 144Hz`,
			},
			gpu: {
				title: 'Graphics',
				text: `NVIDIA GeForce RTX 3070
			Video Memory: 8 GB GDDR6`,
			},
			storage: {
				title: 'Storage',
				text: `Capacity: 512 GB
			Type: SSD
			Technology: PCIe 4.0 NVMe
			Additional NVMe Slot`,
			},
			connectivity: {
				title: 'Connectivity',
				text: `Intel Wi-Fi 6 AX201
			Bluetooth 5.2
			Ethernet: Yes`,
			},
			os: {
				title: 'Operating System',
				text: `Windows 11
			Version: Home 64 bits`,
			},
			ports: {
				title: 'Ports',
				text: `2 x USB 3.2 Gen1
			USB 2.0
			USB 3.2 Gen1
			HDMI (4K @ 60Hz)
			Headphone/Microphone`,
			},
			other: {
				title: 'Other features',
				text: `RGB Backlit Keyboard
			720p Webcam
			Nahimic 3 / Hi-Res Audio
			Cooler Boost 5`,
			},
			model: {
				title: 'Model',
				text: `Brand: MSI
			Line: GL Series
			Model: 12UGK-256`,
			},
			dimensions: {
				title: 'Dimensions and weight',
				text: `39.82 x 27.33 x 2.41 cm
			Weight: 2.79 kg
			Chassis: Plastic`,
			},
			usage: {
				title: 'Recommended use',
				text: 'Gaming, 3D Modeling, Renders, Architecture, Animation, Video Editing',
			},
		},
	},
	{
		id: 'lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti',
		title: `Lenovo IdeaPad Gaming 3 
		15.6″ 120hz 
		Ryzen 5 
		8GB / 256GB 
		RTX 3050Ti`,
		name: `Lenovo IdeaPad Gaming 3 
		15.6″`,
		category: 'gaming',
		brand: 'Lenovo',
		stock: 5,
		price: 449890,
		priceCurrency: '$',
		enabled: true,
		images: [
			'01-600x600.jpg',
			'02-600x600.jpg',
			'03-600x600.jpg',
			'04-600x600.jpg',
			'05-600x600.jpg',
			'06-600x600.jpg',
			'07-600x600.jpg',
		],
		banner: 'banner-idepad-gaming-3-ryzen.jpg',
		description:
			"Lenovo IdeaPad Gaming 3 enhances your gaming and levels the playing field. Designed with the latest generation AMD Ryzen 5 processors and NVIDIA® GeForce® RTX graphics, DDR4 memory, and PCIe SSD storage options, this gaming laptop exudes quiet confidence with smooth, crystal-clear visuals and uninterrupted gaming. The IdeaPad Gaming 3 also stays cool, with a redesigned high-performance thermal system that allows worry-free gaming. Enjoy the crisp 1080p FHD display for seamless gaming and the blazing-fast NVIDIA® GeForce RTX™ 3050 Ti GPU to power today's most popular games, including modern titles.",
		features: {
			cpu: {
				title: 'Processor',
				text: `AMD Ryzen 5 5600H
			Speed: 3.30 GHz - 4.20 GHz
			Cores: 6
			Threads: 12`,
			},
			ram: {
				title: 'Memory',
				text: `Capacity: 8GB
			Type: DDR4
			Expandable: 64GB`,
			},
			screen: {
				title: 'Display',
				text: `Size: 15.6"
			Resolution: FULL HD
			Technology: IPS
			Hz: 120`,
			},
			gpu: {
				title: 'Graphics',
				text: `NVIDIA GeForce RTX 3050 Ti
			Video Memory: 4GB GDDR6`,
			},
			storage: {
				title: 'Storage',
				text: `Capacity: 256 GB
			Type: SSD
			Technology: PCIe 3.0 NVMe
			Additional M.2 Slot`,
			},
			connectivity: {
				title: 'Connectivity',
				text: `WiFi 6 ( 802.11 ax)
			Bluetooth®
			Ethernet: Yes`,
			},
			os: {
				title: 'Operating System',
				text: `Windows 11
			Version: Home 64 Bits`,
			},
			ports: {
				title: 'Ports',
				text: `USB-C® 3.2 Gen 1
			2x USB 3.2 Gen 1
			HDMI 2.0
			RJ-45
			Headphone / microphone`,
			},
			other: {
				title: 'Other features',
				text: `Backlit Keyboard
			720p Webcam
			Numeric Pad
			Nahimic Audio`,
			},
			model: {
				title: 'Model',
				text: `Brand: Lenovo
			Line: IdeaPad Gaming 3
			Model: 82K201XCUS`,
			},
			dimensions: {
				title: 'Dimensions and weight',
				text: `35.96 x 25.19 x 2.41 cm
			Weight: 2.25 kg
			Chassis: Plastic`,
			},
			usage: {
				title: 'Recommended use',
				text: 'Office tasks, Multimedia, Internet, Gaming, Design, Programming',
			},
		},
	},
	{
		id: 'asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb',
		title: `Asus Vivobook Pro 
		14 OLED 
		Core i5 11300H 
		8GB / 256GB`,
		name: `Asus Vivobook Pro 
		14`,
		category: 'notebooks',
		brand: 'Asus',
		stock: 12,
		price: 284890,
		priceCurrency: '$',
		enabled: true,
		images: [
			'01-600x600.jpg',
			'02-600x600.jpg',
			'03-600x600.jpg',
			'04-600x600.jpg',
			'05-600x600.jpg',
			'06-600x600.jpg',
			'07-600x600.jpg',
		],
		banner: 'banner-vivobook.jpg',
		description: '',
		features: {
			cpu: {
				title: 'Processor',
				text: `Intel® Core i5 11300H
			Speed: 3.10 GHz - 4.40 GHz
			Cores: 4
			Threads: 8`,
			},
			ram: {
				title: 'Memory',
				text: `Capacity: 8GB
			Type: DDR4`,
			},
			screen: {
				title: 'Display',
				text: `Size: 14″
			Resolution: WQXGA+ 2880×1800
			Technology: OLED 100% DCI-P3
			Hz: 90`,
			},
			gpu: {
				title: 'Graphics',
				text: 'Intel Iris Xe Graphics',
			},
			storage: {
				title: 'Storage',
				text: `Capacity: 256 GB
			Type: SSD
			Technology: PCIe 3.0 NVMe`,
			},
			connectivity: {
				title: 'Connectivity',
				text: `WiFi 6 802.11ax
			Bluetooth 5.0
			Ethernet: No`,
			},
			os: {
				title: 'Operating System',
				text: `Windows 11
			Version: Home 64 Bits`,
			},
			ports: {
				title: 'Ports',
				text: `2x USB 2.0 Type-A
			USB 3.2 Gen 1 Type-A
			Thunderbolt™ 4 DP/PD
			HDMI
			3.5mm Combo Audio Jack`,
			},
			other: {
				title: 'Other features',
				text: `720p Webcam
			Card Reader
			Backlit Keyboard`,
			},
			model: {
				title: 'Model',
				text: `Brand: Asus
			Line: VivoBook 14 PRO
			Model: K3400PA-WH55`,
			},
			dimensions: {
				title: 'Dimensions and weight',
				text: `31.8 x 22.9 x 1.9 cm
			Weight: 1.40 kg
			Chassis: Aluminum and plastic`,
			},
			usage: {
				title: 'Recommended use',
				text: 'Office tasks, Multimedia, Internet, Design, Programming, Photography',
			},
		},
	},
	{
		id: 'asus-zenbook-flip-2en1-ryzen-7-5700u-8gb-256gb-geforce-mx450',
		title: `Asus ZenBook Flip 2in1 
		15.6″ 
		Ryzen 7 5700U 
		8GB / 256GB 
		GeForce MX450`,
		name: `Asus ZenBook Flip 2in1 
		15.6″`,
		category: 'notebooks',
		brand: 'Asus',
		stock: 9,
		price: 389890,
		priceCurrency: '$',
		enabled: true,
		images: [
			'01.jpg',
			'02.jpg',
			'03.jpg',
			'04.jpg',
			'05.jpg',
			'06.jpg',
			'07.webp',
			'08.jpg',
		],
		banner: 'banner-zenbook-flip.jpg',
		description:
			'Unleash your creativity. The ASUS Zenbook series provides you with the tools to be more creative. Zenbook allows you to maximize your creative potential with a unique combination of performance, speed, elegance, and precision. A versatile and innovative 2-in-1 convertible with a 360-degree display that allows you to use it as a thin and light laptop, a convenient tablet, or in any intermediate position.',
		features: {
			cpu: {
				title: 'Processor',
				text: `AMD® Ryzen 7 5700U
			Speed: 1.80 GHz - 4.30 GHz
			Cores: 8
			Threads: 16`,
			},
			ram: {
				title: 'Memory',
				text: `Capacity: 8GB
			Type: LPDDR4X`,
			},
			screen: {
				title: 'Display',
				text: `Size: 15.6″
			Resolution: Full HD
			Technology: Touch IPS
			Hz: 60`,
			},
			gpu: {
				title: 'Graphics',
				text: `NVIDIA® GeForce® MX450
			Memory: 2GB GDDR6`,
			},
			storage: {
				title: 'Storage',
				text: `Capacity: 256 GB
			Type: SSD
			Technology: PCIe 3.0 NVMe`,
			},
			connectivity: {
				title: 'Connectivity',
				text: `Dual-band Wi-Fi 5 (802.11ac)
			Bluetooth™ 5
			Ethernet: No`,
			},
			os: {
				title: 'Operating System',
				text: `Windows 11
			Version: Home 64 Bits`,
			},
			ports: {
				title: 'Ports',
				text: `USB-A 2.0
			USB-A 3.2 Gen 1
			USB-C 3.2 Gen 1
			HDMI 1
			3.5mm Combo Audio Jack`,
			},
			other: {
				title: 'Other features',
				text: `2-in-1 System 
			(tablet + notebook)
			720p Webcam
			Backlit Keyboard
			Card Reader`,
			},
			model: {
				title: 'Model',
				text: `Brand: Asus
			Line: ZenBook Flip 15
			Model: Q508UG-212.R7TBL`,
			},
			dimensions: {
				title: 'Dimensions and weight',
				text: `35.78 x 23.0 x 1.99 cm
			Weight: 1.99 kg
			Chassis: Aluminum/Plastic`,
			},
			usage: {
				title: 'Recommended use',
				text: 'Programming, photo editing, design, architecture, CAD, Multimedia',
			},
		},
	},
	{
		id: 'lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd',
		title: `Lenovo IdeaPad 3 
		14″ 
		Ryzen 5 
		8GB / 256GB SSD`,
		name: `Lenovo IdeaPad 3 
		14″`,
		category: 'notebooks',
		brand: 'Asus',
		stock: 0,
		price: 279_890,
		priceCurrency: '$',
		enabled: true,
		images: [
			'01.jpg',
			'02.jpg',
			'03.jpg',
			'04.jpg',
			'05.jpg',
			'06.jpg',
			'07.jpg',
			'08.jpg',
		],
		banner: '',
		description: '',
		features: {
			cpu: {
				title: 'Processor',
				text: `AMD® Ryzen 5 5500U
			Speed: 2.10 GHz - 4.0 GHz
			Cores: 6
			Threads: 12`,
			},
			ram: {
				title: 'Memory',
				text: `Capacity: 8GB
			Type: DDR4
			Expandable: 12GB / 20GB`,
			},
			screen: {
				title: 'Display',
				text: `Size: 14″
			Resolution: FULL HD
			Technology: IPS
			Hz: 60`,
			},
			gpu: {
				title: 'Graphics',
				text: 'AMD Radeon RX Vega 7',
			},
			storage: {
				title: 'Storage',
				text: `Capacity: 256 GB
			Type: SSD
			Technology: PCIe NVMe`,
			},
			connectivity: {
				title: 'Connectivity',
				text: `WiFi: 2×2 802.11AC
			Bluetooth®
			Ethernet: No`,
			},
			os: {
				title: 'Operating System',
				text: `Windows 11
			Version: Home 64 Bits`,
			},
			ports: {
				title: 'Ports',
				text: `USB 2.0
			USB 3.2
			USB-C 3.2
			HDMI
			Headphone/Mic Jack`,
			},
			other: {
				title: 'Other features',
				text: `720p Webcam
			Backlit Keyboard
			SD Card Reader`,
			},
			model: {
				title: 'Model',
				text: `Brand: Lenovo
			Line: IdeaPad 3
			Model: 82KT00GVUS`,
			},
			dimensions: {
				title: 'Dimensions and weight',
				text: `32.4 x 21.5 x 1.9 cm
			Weight: 1.45 kg
			Chassis: Plastic`,
			},
			usage: {
				title: 'Recommended use',
				text: 'Office tasks, Multimedia, Internet, basic editing',
			},
		},
	},
	{
		id: 'new-kindle-paperwhite-6-8-16gb-waterproof-11th-gen-black',
		title: `New Kindle Paperwhite 6.8″ 16GB Waterproof 11th Gen Black`,
		name: `New Kindle Paperwhite 11th Gen`,
		category: 'gadgets',
		brand: 'Kindle',
		stock: 2,
		price: 81890,
		priceCurrency: '$',
		enabled: true,
		images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg'],
		banner: 'banner.jpg',
		description: ` Immerse yourself completely in books wherever and whenever you want. The Kindle Paperwhite is thin, light, and easy to carry so you can enjoy your favorite books anytime. Thanks to our 300 ppi glare-free Paperwhite display, now with 10% more brightness at maximum brightness, you can read under any light. Plus, now a single USB-C charge lasts up to 10 weeks. The Kindle Paperwhite is waterproof, so you can use it confidently in even more places, whether you're at the beach or in the bathtub. With IPX8 certification, the Kindle Paperwhite withstands accidental immersion in fresh water up to a depth of 2 meters for up to 60 minutes and in saltwater up to 0.25 meters for up to 3 minutes. Now you can adjust the screen tone of your Kindle Paperwhite and choose from a white light to a warm amber light, or schedule when it changes from one tone to another for a personalized reading experience. You can also adjust the font size and thickness to your preference.
  `,
	},
	{
		id: 'bobovr-m2-pro-oculus-quest-2-halo-strap',
		title: `BoboVR M2 PRO Oculus Quest 2 Halo Strap`,
		name: `BoboVR M2 PRO Oculus Quest`,
		category: 'gadgets',
		brand: 'BoboVR',
		stock: 5,
		price: 139890,
		priceCurrency: '$',
		enabled: true,
		images: [
			'01-600x600.webp',
			'02-600x600.webp',
			'03-600x600.webp',
			'04-600x600.webp',
			'05-600x600.webp',
		],
		banner: 'banner-oculus-quest.webp.jpg',
		description: `M2 Pro is a head strap with a battery specially designed by BOBOVR for the Oculus Quest 2. The BOBOVR design team optimized many details based on the original M2, enhancing overall comfort and practicality of the head strap. 
		The redesigned shape at the back of the head provides a larger contact area, improving overall fit and comfort.`,
	},
];

const DELAY = 300;

export const getProducts = (
	filter: string,
	minPrice: number,
	maxPrice: number,
	category: string
): Promise<Product[]> => {
	return new Promise((resolve) => {
		let filteredProducts: Product[] = [...products];

		if (category !== 'all') {
			filteredProducts = filteredProducts.filter(
				(product: Product) => product.category === category
			);
		}

		filteredProducts = filteredProducts.filter(
			(product: Product) =>
				product.price >= minPrice && product.price <= maxPrice
		);

		if (filter !== '') {
			filteredProducts = filteredProducts.filter((product: Product) =>
				product.name.includes(filter)
			);
		}

		setTimeout(() => {
			resolve(filteredProducts);
		}, DELAY);
	});
};

export const getProductById = (id: string): Promise<Product> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const product = products.find((prod: Product) => prod.id === id);
			resolve(product as Product);
		}, DELAY);
	});
};

export const getProductsByCategory = (category: string): Promise<Product[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.filter((prod) => prod.category === category));
		}, DELAY);
	});
};

export async function get_releases_url(url: string): Promise<[string, string, string]> {
    if (!url){
        return ["", "", ""]
    }
    
    interface Asset {
        name: string,
        browser_download_url: string,
    }
    interface ReleaseJson {
        assets: Asset[]
    }

    let windows_download_url = "";
    let linux_download_url = "";
    let mac_download_url = "";

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Showcase Site"
        }
    });

    const last_release_data: ReleaseJson = await response.json();

    for (const asset of last_release_data.assets) {
        if (asset.name.toLowerCase().includes("windows")) {
            windows_download_url = asset.browser_download_url;
        } else if (asset.name.toLowerCase().includes("linux")) {
            linux_download_url = asset.browser_download_url;
        }
        else if (asset.name.toLowerCase().includes("mac")) {
            mac_download_url = asset.browser_download_url
        }
    }

    return [windows_download_url, linux_download_url, mac_download_url]
}
from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        repo_path = os.getcwd()

        # 1. Verify the main hub
        page.goto(f"file://{repo_path}/index.html")
        page.screenshot(path="jules-scratch/verification/0_main_hub.png")

        # 2. Verify the Cyberpunk verse
        page.click('a#cyberpunk')
        page.wait_for_load_state('networkidle')
        page.screenshot(path="jules-scratch/verification/1_cyberpunk.png")
        page.go_back()
        page.wait_for_load_state('networkidle')

        # 3. Verify the Retro verse
        page.click('a#retro')
        page.wait_for_load_state('networkidle')
        page.screenshot(path="jules-scratch/verification/2_retro.png")
        page.go_back()
        page.wait_for_load_state('networkidle')

        # 4. Verify the Nature verse
        page.click('a#nature')
        page.wait_for_load_state('networkidle')
        page.screenshot(path="jules-scratch/verification/3_nature.png")
        page.go_back()
        page.wait_for_load_state('networkidle')

        # 5. Verify the Classic verse
        page.click('a#classic')
        page.wait_for_load_state('networkidle')
        page.screenshot(path="jules-scratch/verification/4_classic.png")

        browser.close()

if __name__ == '__main__':
    run()

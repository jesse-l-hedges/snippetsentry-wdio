describe("Sekect User Status", () => {
  it("tests Sekect User Status", async () => {
    await browser.setWindowSize(1180, 695)
    await browser.url("https://beta.snippetsentry.com/app/client/users")
    await expect(browser).toHaveUrl("https://beta.snippetsentry.com/app/client/users")
    await browser.$("//*[@data-testid=\"dropdown-select-user-status\"]/div/div/div[4]/svg").click()
    await browser.$("//*[@id=\"v-menu-v-121\"]/div/div/div[5]/div[2]/div").click()
    await browser.$("//*[@data-testid=\"dropdown-select-channel-connection-status\"]/div/div/div[3]/div").click()
    await browser.$("//*[@id=\"v-menu-v-124\"]/div/div/div[3]/div[2]/div").click()
    await browser.$("//*[@data-testid=\"dropdown-select-channel\"]/div/div/div[3]/div").click()
    await browser.$("//*[@id=\"v-menu-v-127\"]/div/div/div[5]/div[2]/div").click()
    await browser.$("//*[@id=\"manage-user-data-table-virtual\"]/div[1]/div[2]/div[4]/button/span[3]").click()
    await browser.$("//*[@data-testid=\"user-name-in-list\"]/span[3]").click()
  });
});

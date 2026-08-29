import { expect, test } from "@playwright/test";

test("cancelling the gym drops the yearly leak by 2160", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "LeakSubs" })).toBeVisible();
  await expect(page.getByTestId("author-credit")).toContainText("Alessandro Alghisi");
  const before = await page.getByTestId("burn").innerText();
  await page.getByTestId("cancel-gym").click();
  await expect(page.getByTestId("saved")).toHaveText("2160 lei");
  await expect(page.getByTestId("burn")).not.toHaveText(before);
});

rsync -rvzP --filter="merge ./transfer_filter.txt" ../ username@domain:/portfolio --dry-run
ssh username@domain